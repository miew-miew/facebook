import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import {
  ArrowDownTrayIcon,
  ChatBubbleLeftRightIcon,
  ChevronRightIcon,
  DocumentIcon,
  EllipsisVerticalIcon,
  HandThumbUpIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { Link, router, useForm } from "@inertiajs/react";
import PostModal from "./PostModal";
import PostUserHeader from "./PostUserHeader";

function isImage(attachment) {
  const mime = attachment.mime.split('/');
  return mime[0].toLowerCase() === 'image';
}

export default function PostItem({ post }) {

  const [showEditModal, setShowEditModal] = useState(false);

  function openModal() {
    setShowEditModal(true);
  }

  function closeModal() {
    setShowEditModal(false);
  }

  function deletePost() {
    if(window.confirm('Are you sure you want to delete this post?')){
      router.delete(route('post.destroy', post), {
        preserveScroll: true
      })
    }
  }

  return (
  <div>
      <div className="bg-white border rounded p-4 mb-3">
      <div className="flex items-center justify-between gap-2 mb-3">
        <PostUserHeader post={post} />
        <div className="justify-self-end">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="size-8 rounded-full hover:bg-black/10 transition flex items-center justify-center">
                <EllipsisVerticalIcon className="w-5 h-5" aria-hidden="true" />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                        } group flex items-center w-full px-2 py-2 text-sm`}
                        onClick={openModal}
                      >
                        <PencilSquareIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                        Edit
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                        } group flex items-center w-full px-2 py-2 text-sm`}
                        onClick={deletePost}
                      >
                        <TrashIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                        Delete
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
      <div className="mb-3">
        {post.content.length <= 200 ? (
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        ) : (
          <Disclosure>
            {({ open }) => (
              <div>
                <div>
                  {!open ? (
                    <div dangerouslySetInnerHTML={{ __html: post.content.substring(0, 200) }} />
                  ) : (
                    <Disclosure.Panel>
                      <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    </Disclosure.Panel>
                  )}
                </div>
                <div className="flex justify-end">
                  <Disclosure.Button className="text-blue-500 hover:underline">
                    {open ? 'Read less' : 'Read more'}
                  </Disclosure.Button>
                </div>
              </div>
            )}
          </Disclosure>
        )}
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mb-3">
        {post.attachments && post.attachments.map((attachment) => (
          <div key={attachment.id}>
            <div className="group bg-blue-100 aspect-square flex flex-col items-center justify-center text-gray-500 relative">
              {/* Download */}
              <button className="opacity-0 group-hover:opacity-100 size-8 flex items-center justify-center text-gray-100 bg-gray-700 rounded absolute right-2 top-2 cursor-pointer hover:bg-gray-800">
                <ArrowDownTrayIcon className="w-4 h-4" />
              </button>
              {/* Download */}
              {isImage(attachment) ? (
                <img src={attachment.url} className="object-cover aspect-square" />
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
      <div className="flex gap-2">
        <button className="text-gray-800 flex gap-1 items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg py-2 px-4 flex-1">
          <HandThumbUpIcon className="size-6" />
          Like
        </button>
        <button className="text-gray-800 flex gap-1 items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg py-2 px-4 flex-1">
          <ChatBubbleLeftRightIcon className="size-6" />
          Comment
        </button>
      </div>
      </div>
      <PostModal post={post} isOpen={showEditModal} onClose={closeModal} />
  </div>
  );
}
