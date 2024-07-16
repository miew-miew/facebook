import { PhotoIcon } from "@heroicons/react/24/solid"
import { useState } from "react"

export default function CreatePost() {
    const [postCreating, setPostCreating] = useState(false);

    return(
        <div className="p-4 bg-white rounded-lg border mb-3 ">
            <div 
            className="py-3 px-2 text-gray-400 border-2 border-gray-200 rounded mb-3"
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