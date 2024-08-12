import { Link } from "@inertiajs/react";

function PostUserHeader ({ post, showTime = true }) {
    return (
        <div>
            <div className="flex items-center gap-2">
                <Link>
                    <img src={post.user.avatar_path} className="w-[40px] rounded-full border-2 hover:border-blue-500" />
                </Link>
                <div>
                    <div className="flex items-center">
                    <h4 className="font-bold mr-1 hover:underline">
                        <Link>
                        {post.user.name}
                        </Link>
                    </h4>
                    {post.group && (
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
                    {showTime && (
                        <small className="text-gray-400">{post.updated_at}</small>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PostUserHeader;