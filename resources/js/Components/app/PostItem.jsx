import { Disclosure } from "@headlessui/react";
import { ArrowDownTrayIcon, ChevronRightIcon, DocumentIcon } from "@heroicons/react/24/solid";
import { Link } from "@inertiajs/react";

function isImage(attachement){
    const mime = attachement.mime.split('/')
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
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                {post.attachements && post.attachements.map((attachement) => (
                    <div key={attachement.id} >
                            <div className="bg-blue-100 aspect-square flex flex-col items-center justify-center text-gray-500 relative">
                                <button className="w-8 h-8 flex items-center justify-center text-gray-100 bg-gray-700 rounded absolute right-2 top-2 cursor-pointer hover:bg-gray-800">
                                    <ArrowDownTrayIcon className="w-4 h-4"/>
                                </button>
                                {isImage(attachement) ? (
                                    <img src={attachement.url} className="object-cover aspect-square" />
                                ) : (
                                    <div>
                                        <DocumentIcon className="w-16 h-16"/>
                                        {attachement.name}
                                    </div>
                                )}
                            </div>
                    </div>
                ))}
            </div>
            <div>
                <button>
                    Like
                </button>
                <button>
                    Comment
                </button>
            </div>
        </div>
    )
}
