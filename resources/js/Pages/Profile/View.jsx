import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Tab } from "@headlessui/react";
import { Head, usePage } from "@inertiajs/react";
import { useState } from "react";
import avatar from '../../Assets/avatar.png';
import TabItem from "./Partials/TabItem";
import Edit from "./Edit";
import PrimaryButton from "@/Components/PrimaryButton";
import { PencilIcon } from "@heroicons/react/24/outline"

export default function View({user, auth, mustVerifyEmail, status }) {

    const authUser = usePage().props.auth.user;
    const [activeTab, setActiveTab] = useState('About');
    const isMyProfile = authUser && authUser.id == user.id

    return(
        <AuthenticatedLayout user={auth.user} >
            <Head title="Profile" />
            <div className="w-[900px] mx-auto h-full overflow-auto">
                <div className="relative bg-white">
                    <img 
                        src="https://media.istockphoto.com/id/938171020/photo/book-stacking-open-book-hardback-books-on-wooden-table-and-pink-background-back-to-school-copy.jpg?s=1024x1024&w=is&k=20&c=TUeFn7g6kFBWls8ZpHOH8S9xXRz4_-2BiJI8nzCosAI=" 
                        className="w-full h-[200px] object-cover" /> 
                    <div className="flex">
                        <img 
                            src={avatar} 
                            className="ml-[48px] size-[190px] -mt-[64px] rounded-full " />
                        <div className="flex justify-between items-center flex-1 p-3">
                            <h2>{ user.name }</h2>
                            {isMyProfile &&
                                <PrimaryButton>
                                    <PencilIcon className="w-4 h-4 mr-2" />
                                    Edit Profile
                                </PrimaryButton>
                            }
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