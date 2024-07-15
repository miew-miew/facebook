import { PhotoIcon } from "@heroicons/react/24/solid"
import { useState } from "react"

export default function CreatePost() {
    const [postCreating, setPostCreating] = useState(false);

    return(
        <div className="py-6">
            <div 
            className="py-3 px-2 text-gray-500 border border-gray-300 rounded mb-3"
            onClick={() => setPostCreating(true)}>
                Click here to create new post
            </div>
            { postCreating && (
                <div className="flex justify-center">
                    <label htmlFor="fileInput" className="flex items-center gap-1 hover:bg-gray-200 p-2 rounded-md cursor-pointer w-36">
                        <PhotoIcon className="h-6 w-6 text-green-600" />
                        Photo / video
                    </label>
                    <input type="file" id="fileInput" className="hidden" />
                </div>
            )}
        </div>
    )
}