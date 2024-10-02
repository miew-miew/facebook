import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import { useForm } from '@inertiajs/react';
import PostUserHeader from './PostUserHeader';
import { BookmarkIcon, PaperClipIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { ClassicEditor, Bold, Essentials, Italic, Paragraph } from 'ckeditor5';
import 'ckeditor5/ckeditor5.css';
import { isImage } from '../../helpers.js';

export default function PostModal({ post, isOpen, onClose }) {
  const form = useForm({
    id: post.id || null,
    content: post.content || '', // Initialize with post content or an empty string
    attachments: []
  });
  const [attachmentFiles, setAttachmentFiles] = useState([]);

  useEffect(() => {
    if (isOpen) {
      // Update form data when modal opens
      form.setData('id', post.id);
      form.setData('content', post.content || '');

      if(!post.id){
        setAttachmentFiles([])
      }
    }
  }, [isOpen, post]);

  function closeModal() {
    onClose();
  }

  function handleChange(event, editor) {
    const data = editor.getData();
    form.setData('content', data); // Update content in the form
  }

  console.log(attachmentFiles)

  function submit() {
    const attachmentFile = attachmentFiles.map(attachedFile => attachedFile.file)
    form.setData('attachments', attachmentFile);
    console.log('Form data before submit:', form.data);
    // Fonction de soumission du formulaire
    if (form.data.id) {
      // Si l'ID existe, mettre à jour le post
      form.put(route('post.update', form.data.id), {
        preservedScroll: true, 
        onSuccess: closeModal, 
      });
    } else {
      // Sinon, créer un nouveau post
      form.post(route('post.create'), {
        onSuccess: closeModal, 
      });
    }
  }

  async function attachFile(e) {
    const files = Array.from(e.target.files); // Conversion des fichiers sélectionnés en tableau
    const attachedFile = await Promise.all(files.map(async (file) => {
      const url = await readFile(file); // Lit chaque fichier pour obtenir son URL
      return { file, url }; // Retourne un objet contenant le fichier et son URL
    }));

    setAttachmentFiles(prev => [...prev, ...attachedFile]); // Met à jour l'état des fichiers joints
  }

  async function readFile(file) {
    // Fonction pour lire le fichier et retourner son URL
    return new Promise((resolve, reject) => {
      if (isImage(file)) {
        // Vérifie si le fichier est une image
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result); // Résout avec l'URL de l'image
        reader.onerror = reject; // Rejette en cas d'erreur
        reader.readAsDataURL(file); // Lit le fichier comme une URL de données
      } else {
        resolve(null); // Si ce n'est pas une image, retourne null
      }
    });
  }

  function removeFile(attachedFileToRemove) {
    setAttachmentFiles(prev => prev.filter(attachedFile => attachedFile.file !== attachedFileToRemove.file));
  }  

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="flex items-center justify-between py-3 px-4 font-medium bg-gray-100 text-gray-900"
                >
                  {form.data.id ? 'Update Post' : 'Create Post'}
                  <button onClick={closeModal} className="size-8 rounded-full hover:bg-black/10 transition flex items-center justify-center">
                    <XMarkIcon className="size-5" />
                  </button>
                </Dialog.Title>
                <div className="p-4 mt-2 space-y-2">
                  <PostUserHeader post={post} showTime={false} />
                  <CKEditor
                    editor={ClassicEditor}
                    data={form.data.content}
                    onChange={handleChange} 
                    config={{
                      plugins: [Essentials, Bold, Italic, Paragraph],
                      toolbar: ['undo', 'redo', '|', 'bold', 'italic'],
                    }}
                  />

                  <div className="grid grid-cols-2 gap-3 my-3">
                    {attachmentFiles.slice(0,4).map((attachedFile, index) => (
                      <div key={index}>
                        <div className="group aspect-square bg-blue-100 flex flex-col items-center justify-center text-gray-500 relative">
                          
                          {index === 3 && attachmentFiles.length > 4 && (
                            <div className='absolute left-0 top-0 right-0 bottom-0 z-10 bg-black/30 text-white flex items-center justify-center'>
                              +{attachmentFiles.length - 4} more
                            </div>
                          )}

                          <button 
                          onClick={() => removeFile(attachedFile)}
                          className="absolute z-20 right-1 top-1 size-7 flex items-center justify-center bg-black/30 hover:bg-black/20 text-white rounded-full text-2xl"
                          >
                              <XMarkIcon className="size-5" />
                          </button>

                          {/* Display attachedFile */}
                          {isImage(attachedFile.file) ? (
                            <div>
                              <img src={attachedFile.url} className="object-cover aspect-square" />
                            </div>
                          ) : (
                            <div className='w-full h-full flex flex-col items-center justify-center'>
                              <PaperClipIcon className="size-10 mb-3" />
                              <small>{attachedFile.file.name}</small>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 py-3 px-4">
                  <button
                    type="button"
                    className="flex items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-full relative"
                  >
                    <PaperClipIcon className='size-4 mr-2' />
                    Attach files
                    <input 
                      onChange={attachFile}
                      type="file" multiple className="absolute left-0 top-0 right-0 bottom-0 opacity-0" 
                    />
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-full"
                    onClick={submit}
                  >
                    <BookmarkIcon className='size-4 mr-2' />
                    Submit
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
