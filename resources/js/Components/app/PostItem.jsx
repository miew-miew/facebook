import { Disclosure } from "@headlessui/react";
import { ArrowDownTrayIcon, ChatBubbleLeftRightIcon, ChevronRightIcon, DocumentIcon, HandThumbUpIcon } from "@heroicons/react/24/solid";
import { Link } from "@inertiajs/react";

function isImage(attachment){
    const mime = attachment.mime.split('/')
    return mime[0].toLowerCase() === 'image'
}

export default function PostItem({ post }) {
    return(
        <div className="bg-white border rounded p-4 mb-3">
            <div className="flex items-center gap-2 mb-3">
                <Link>
                    <img src={post.user.avatar} className="w-[40px] rounded-full border-2 hover:border-blue-500" />
                </Link>
                <div>
                    <div className="flex items-center">
                        <h4 className="font-bold mr-1 hover:underline">
                            <Link>
                                {post.user.name}
                            </Link>
                        </h4>
                        { post.group && (
                            <div className="flex items-center">
                                <ChevronRightIcon className="w-4 h-4 text-gray-900" />
                                <h4 className="font-bold mr-1 hover:underline">
                                    <Link>
                                        {post.group.name}
                                    </Link>
                                </h4>
                            </div>
                        )}
                    </div>
                    <small className="text-gray-400">{post.created_at}</small>
                </div>
            </div>
            <div className="mb-3">
                <Disclosure>
                {({ open }) => (
                    <div>
                        {!open && <div dangerouslySetInnerHTML={{ __html: post.body.substring(0, 200) }} />}
                        <Disclosure.Panel>
                            <div dangerouslySetInnerHTML={{ __html: post.body }} />
                        </Disclosure.Panel>
                        <div className="flex justify-end">
                            <Disclosure.Button className="text-blue-500 hover:underline">
                                {open ? 'Read less' : 'Read more'}
                            </Disclosure.Button>
                        </div>
                    </div>
                )}
                </Disclosure>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mb-3">
                {post.attachments && post.attachments.map((attachment) => (
                    <div key={attachment.id} >
                            <div className="group bg-blue-100 aspect-square flex flex-col items-center justify-center text-gray-500 relative">
                                {/* Download */}
                                <button className="opacity-0 group-hover:opacity-100 size-8 flex items-center justify-center text-gray-100 bg-gray-700 rounded absolute right-2 top-2 cursor-pointer hover:bg-gray-800">
                                    <ArrowDownTrayIcon className="w-4 h-4"/>
                                </button>
                                {/* Download */}
                                {isImage(attachment) ? (
                                    <img src={attachment.url} className="object-cover aspect-square" />
                                ) : (
                                    <div>
                                        <DocumentIcon className="size-12"/>
                                        <small>{attachment.name}</small>
                                    </div>
                                )}
                            </div>
                    </div>
                ))}
            </div>
            <div className="flex gap-2">
                <button className="text-gray-800 flex gap-1 items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg py-2 px-4 flex-1">
                    <HandThumbUpIcon className="size-6"/>
                    Like
                </button>
                <button className="text-gray-800 flex gap-1 items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg py-2 px-4 flex-1">
                    <ChatBubbleLeftRightIcon className="size-6" />
                    Comment
                </button>
            </div>
        </div>
    )
}
