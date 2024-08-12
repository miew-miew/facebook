import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import TextareaInput from '../TextareaInput';
import { useForm } from '@inertiajs/react';
import PostUserHeader from './PostUserHeader';
import { XMarkIcon } from '@heroicons/react/24/solid';

export default function PostModal({ post, isOpen, onClose }) {
  const [content, setContent] = useState(post.content);
  
  const form = useForm({
    id: post.id,
    content: post.content, // Initialisez avec le contenu du post
});

// Utilise un useEffect pour mettre à jour le formulaire quand le contenu change
useEffect(() => {
    form.setData('content', content);
}, [content]);


  function closeModal() {
    onClose();
  }

  function submit() {
    form.put(route('post.update', post), {
      preservedScroll:true,
      onSuccess: () => closeModal(),
    });
  }

  return (
    <>
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
                    Update Post
                    <button onClick={closeModal} className="size-8 rounded-full hover:bg-black/10 transition flex items-center justify-center">
                      <XMarkIcon className="size-5" />
                    </button>
                  </Dialog.Title>
                  <div className="p-4 mt-2">
                    <PostUserHeader post={post} showTime={false} />
                    <TextareaInput
                      className="mt-4 w-full"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                    />
                  </div>

                  <div className="py-3 px-4">
                    <button
                      type="button"
                      className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-full"
                      onClick={submit}
                    >
                      Submit
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
