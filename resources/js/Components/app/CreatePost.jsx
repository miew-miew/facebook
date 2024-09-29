import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useForm, usePage } from "@inertiajs/react";
import PostModal from "./PostModal";
import TextInput from "../TextInput";

export default function CreatePost() {
    const authUser = usePage().props.auth.user;
    const [showModal, setShowModal] = useState(false);
    const { data, setData } = useForm({
        content: '',
        user: authUser
    });

    const handleTextInputChange = (e) => {
        setData('content', e.target.value);
    };

    function showPostCreatingModal() {
        setShowModal(true);
    }

    function closeModal() {
        setShowModal(false);
    }

    return (
        <div className="p-4 bg-white rounded-lg border mb-3">
            <div
                className="py-2 px-3 border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 w-full cursor-pointer"
                onChange={handleTextInputChange}
                onClick={showPostCreatingModal}
            >
                Click here to create a new post
            </div>
            {/* Commenté pour l'instant. Décommentez si nécessaire.
            <div className="flex mt-3">
                <button 
                    type="button"
                    onClick={() => document.getElementById('fileInput').click()}
                    className="flex flex-1 justify-center items-center gap-1 hover:bg-gray-200 p-2 rounded-md cursor-pointer">
                    <PhotoIcon className="h-6 w-6 text-green-600" />
                    Photo / video
                </button>
                <input type="file" id="fileInput" className="hidden" />

                <button
                    type="submit"
                    onClick={submit}
                    className="flex flex-1 justify-center items-center gap-1 hover:bg-gray-200 rounded-md cursor-pointer">
                    <CheckCircleIcon className="h-6 text-emerald-500" />
                    Submit
                </button>
            </div>
            */}
            <PostModal post={data} isOpen={showModal} onClose={closeModal} />
        </div>
    );
}
