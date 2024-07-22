import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Tab } from "@headlessui/react";
import { Head, usePage } from "@inertiajs/react";
import { useState } from "react";
import avatar from '../../Assets/avatar.png';
import TabItem from "./Partials/TabItem";
import Edit from "./Edit";
import PrimaryButton from "@/Components/PrimaryButton";
import { PencilIcon } from "@heroicons/react/24/outline"
import { CameraIcon } from "@heroicons/react/24/outline";
import default_cover from "../../Assets/default_cover.jpg";

export default function View({user, auth, mustVerifyEmail, status }) {

    const [coverImageSrc, setCoverImageSrc] = useState('');
    const authUser = usePage().props.auth.user;
    const [activeTab, setActiveTab] = useState('About');
    const isMyProfile = authUser && authUser.id === user.id;
    function onCoverChange (e) {
        const file = e.target.files[0]
        if(file){
            const reader = new FileReader()
            reader.onload = () => {
                setCoverImageSrc(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }

    return(
        <AuthenticatedLayout user={auth.user} >
            <Head title="Profile" />
            <div className="w-[900px] mx-auto max-h-screen overflow-auto">
                <div className="group relative bg-white">
                <img 
                        src={coverImageSrc || user.cover_path || default_cover} 
                        className="w-full h-[200px] object-cover" /> 
                        <label htmlFor="fileInput" className="absolute top-2 right-2 bg-gray-50 hover:bg-gray-100 text-gray-800 py-1 px-2 text-xs rounded flex items-center opacity-0 group-hover:opacity-100 cursor-pointer">
                            <CameraIcon className="size-3 mr-2" />
                            Update cover photo
                        </label>
                        <input type="file" id="fileInput" className="hidden" 
                            onChange={onCoverChange}/>
                    <div className="flex">
                        <img 
                            src={avatar} 
                            className="ml-[48px] size-[190px] -mt-[64px] rounded-full " />
                        <div className="flex justify-between items-center flex-1 p-3">
                            <h2>{ user.name }</h2>
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