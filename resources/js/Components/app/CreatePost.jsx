import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { PhotoIcon } from "@heroicons/react/24/solid"
import { useState } from "react"
import TextareaInput from "../TextareaInput";

export default function CreatePost() {
    const [postCreating, setPostCreating] = useState(false);
    const [newPost, setNewPost] = useState({ body: '' });

    const handleTextareaChange = (value) => {
        setNewPost({ body: value });
    };

    return(
        <div className="p-4 bg-white rounded-lg border mb-3 ">
            <TextareaInput 
                className="mb-3 w-full"
                placeholder="Click here to create a new post"
                rows="1"
                value={newPost.body}
                onChange={handleTextareaChange}
                onClick={() => setPostCreating(true)}/>
                <div>
                    {newPost.body}
                </div>
            { postCreating && (
                <div className="flex">
                    <label htmlFor="fileInput" className="flex flex-1 justify-center items-center gap-1 hover:bg-gray-200 p-2 rounded-md cursor-pointer">
                        <PhotoIcon className="h-6 w-6 text-green-600" />
                        Photo / video
                    </label>
                    <input type="file" id="fileInput" className="hidden" />
                    <button className="flex flex-1 justify-center items-center gap-1 hover:bg-gray-200 rounded-md cursor-pointer">
                        <CheckCircleIcon className="size-6 text-emerald-500" />
                        Submit
                    </button>
                </div>
            )}
        </div>
    )
}