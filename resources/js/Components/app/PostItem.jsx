import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { Link } from "@inertiajs/react";

export default function PostItem({ post }) {
    return(
        <div className="bg-white border rounded p-4 mb-3">
            <div className="flex items-center gap-2 mb-3">
                <Link>
                    <img src={post.user.avatar} className="w-[40px] rounded-full" alt="User Avatar" />
                </Link>
                <div className="flex items-center">
                    <h4 className="font-bold mr-1">
                        <Link>
                            {post.user.name}
                        </Link>
                    </h4>
                    { post.group && (
                        <div className="flex items-center">
                            <ChevronRightIcon className="size-4 text-gray-900" />
                            <h4 className="font-bold mr-1">
                                <Link>
                                    {post.group.name}
                                </Link>
                            </h4>
                        </div>
                    )}
                </div>
            </div>
            <Disclosure>
            {({ open }) => (
                <div>
                    {!open && <div dangerouslySetInnerHTML={{ __html: post.body.substring(0, 200) }} />}
                    <Disclosure.Panel>
                        <div dangerouslySetInnerHTML={{ __html: post.body }} />
                    </Disclosure.Panel>
                    <div className="flex justify-end">
                        <Disclosure.Button className="text-blue-500">
                            {open ? 'Read less' : 'Read more'}
                        </Disclosure.Button>
                    </div>
                </div>
            )}
            </Disclosure>
        </div>
    )
}
