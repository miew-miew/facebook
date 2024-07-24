import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Tab } from "@headlessui/react";
import { Head, usePage } from "@inertiajs/react";
import { useState, useCallback } from "react";
import default_avatar from '../../../../public/img/default_avatar.png';
import TabItem from "./Partials/TabItem";
import Edit from "./Edit";
import PrimaryButton from "@/Components/PrimaryButton";
import { PencilIcon } from "@heroicons/react/24/outline"
import { CameraIcon } from "@heroicons/react/24/outline";
import default_cover from "../../../../public/img/default_cover.jpg";
import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useForm } from '@inertiajs/react'

export default function View({user, auth, mustVerifyEmail, status, errors }) {

    const [coverImageSrc, setCoverImageSrc] = useState('');
    const authUser = usePage().props.auth.user;
    const [activeTab, setActiveTab] = useState('About');
    const isMyProfile = authUser && authUser.id === user.id; // Vérification si l'utilisateur authentifié est le propriétaire du profil.
    const [showNotification, setShowNotification] = useState(true);

    // Fonction pour masquer la notification après 3 secondes.
    const hideNotification = useCallback(() => {
        setTimeout(() => {
            setShowNotification(false);
        }, 3000);
    }, [setShowNotification]);

    const { data, setData, post } = useForm({
        avatar: null,
        cover: null,
    });

    function onCoverChange(e) {
        setData('cover', e.target.files[0]);
        if (e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = () => {
            setCoverImageSrc(reader.result);
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    }

    function cancelCoverImage () {
        data.cover = null;
        setCoverImageSrc(null);
    }

    function SubmitCoverImage() {
        if (data.cover) {
            post(route('profile.updateCover'), {
                onSuccess: (user) => {
                    console.log(user)
                    cancelCoverImage();
                    hideNotification();
                }
            })
        }
    }

    return(
        <AuthenticatedLayout user={auth.user} >
            <Head title="Profile" />
            <div className="max-w-[900px] mx-auto max-h-screen overflow-auto">
                {showNotification && status === 'cover-image-update' && (
                    <div className="my-2 py-2 px-3 font-medium text-sm bg-emerald-500 text-white rounded-sm">
                        Your cover image has been updated.
                    </div>
                )}
                {errors.cover && (
                    <div className="my-2 py-2 px-3 font-medium text-sm bg-red-400 text-white rounded-sm">
                        {errors.cover}
                    </div>
                )}
                <div className="group relative bg-white">
                <img 
                        src={coverImageSrc || user.cover_path || default_cover} 
                        className="w-full h-[200px] object-cover" /> 
                <div className="absolute top-2 right-2 ">
                    {!coverImageSrc ? (
                        <div>
                            <label htmlFor="fileInput" className="bg-gray-50 hover:bg-gray-100 text-gray-800 py-1 px-2 text-xs rounded flex items-center opacity-0 group-hover:opacity-100 cursor-pointer">
                                <CameraIcon className="size-3 mr-2" />
                                Update cover photo
                            </label>
                            <input type="file" id="fileInput" className="hidden" 
                                onChange={onCoverChange}/>
                        </div>
                        
                    ) : (
                        <div className="flex space-x-1 opacity-0 group-hover:opacity-100">
                            <button 
                            className="bg-gray-50 hover:bg-gray-100 text-gray-800 py-1 px-2 text-xs rounded flex items-center cursor-pointer"
                            onClick={cancelCoverImage}>
                                <XMarkIcon className="size-3 mr-2" />
                                Cancel
                            </button>
                            <button 
                            className="bg-gray-800 hover:bg-gray-900 text-gray-100 py-1 px-2 text-xs rounded flex items-center cursor-pointer"
                            onClick={SubmitCoverImage}>
                                <CheckCircleIcon className="size-3 mr-2" />
                                Submit
                            </button>
                        </div>
                    )}
                </div>
                        
                <div className="flex">
                    <img 
                        src={default_avatar} 
                        className="ml-[48px] size-[190px] -mt-[64px] rounded-full " />
                    <div className="flex justify-between items-center flex-1 p-3">
                        <h2 className="text-3xl">{ user.name }</h2>
                        {isMyProfile && (
                            <PrimaryButton>
                                <PencilIcon className="size-4 mr-2" />
                                Edit Profile
                            </PrimaryButton>
                        )}
                    </div>
                </div>
                </div>

                <div className="border-t">
                    <Tab.Group>
                        <Tab.List className="flex bg-white">
                            {isMyProfile &&
                                <TabItem selected={activeTab === 'About'} onClick={() => setActiveTab('About')}>
                                    About
                                </TabItem>
                            }

                            <TabItem selected={activeTab === 'Posts'} onClick={() => setActiveTab('Posts')}>
                                Posts
                            </TabItem>

                            <TabItem selected={activeTab === 'Friends'} onClick={() => setActiveTab('Friends')}>
                                Friends
                            </TabItem>

                            <TabItem selected={activeTab === 'Photos'} onClick={() => setActiveTab('Photos')}>
                                Photos
                            </TabItem>
                        </Tab.List>

                        <Tab.Panels className="mt-3">
                            {isMyProfile &&
                                <Tab.Panel>
                                    <Edit mustVerifyEmail={mustVerifyEmail} status={status}/>
                                </Tab.Panel>
                            }
                            <Tab.Panel className="bg-white p-3 shadow">
                                Posts
                            </Tab.Panel>

                            <Tab.Panel className="bg-white p-3 shadow">
                                Friends
                            </Tab.Panel>

                            <Tab.Panel className="bg-white p-3 shadow">
                                Photos
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}