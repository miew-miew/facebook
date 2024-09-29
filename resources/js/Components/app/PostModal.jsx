import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import { useForm } from '@inertiajs/react';
import PostUserHeader from './PostUserHeader';
import { BookmarkIcon, PaperClipIcon, XMarkIcon, ArrowDownTrayIcon, DocumentIcon } from '@heroicons/react/24/solid';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { ClassicEditor, Bold, Essentials, Italic, Paragraph } from 'ckeditor5';
import 'ckeditor5/ckeditor5.css';
import { isImage } from '../../helpers.js';

export default function PostModal({ post, isOpen, onClose }) {
  const form = useForm({
    id: post.id || null,
    content: post.content || '', // Initialize with post content or an empty string
  });
  const [attachmentFiles, setAttachmentFiles] = useState([]);

  useEffect(() => {
    if (isOpen) {
      // Update form data when modal opens
      form.setData('id', post.id);
      form.setData('content', post.content || '');
    }
  }, [isOpen, post]);

  function closeModal() {
    onClose();
  }

  function handleChange(event, editor) {
    const data = editor.getData();
    form.setData('content', data); // Update content in the form
  }

  function submit() {
    if (form.data.id) {
      form.put(route('post.update', form.data.id), {
        preservedScroll: true,
        onSuccess: closeModal,
      });
    } else {
      form.post(route('post.create'), {
        onSuccess: closeModal,
      });
    }
  }

  async function attachFile(e) {
    const files = Array.from(e.target.files);
    const attachedFiles = await Promise.all(files.map(async (file) => {
      const src = await readFile(file);
      return { file, src };
    }));
    setAttachmentFiles(prev => [...prev, ...attachedFiles]);
  }
  console.log(attachmentFiles)

  async function readFile(file) {
    return new Promise((resolve, reject) => {
      if (isImage({mime: file.type})) {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      } else {
        resolve(null);
      }
    });
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

                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mb-3">
                    {post.attachments && post.attachments.map((attachment) => (
                      <div key={attachment.id}>
                        <div className="group bg-blue-100 aspect-square flex flex-col items-center justify-center text-gray-500 relative">
                          {/* Download */}
                          <button className="opacity-0 group-hover:opacity-100 size-8 flex items-center justify-center text-gray-100 bg-gray-700 rounded absolute right-2 top-2 cursor-pointer hover:bg-gray-800">
                            <ArrowDownTrayIcon className="w-4 h-4" />
                          </button>
                          {/* Display attachment */}
                          {isImage(attachment.url) ? (
                            <img src={attachment.url} className="object-cover aspect-square" alt={attachment.name} />
                          ) : (
                            <div>
                              <DocumentIcon className="size-12" />
                              <small>{attachment.name}</small>
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
