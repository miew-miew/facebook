import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Tab } from "@headlessui/react";
import { Head, usePage } from "@inertiajs/react";
import { useState } from "react";
import TabItem from "./Partials/TabItem";

export default function View({auth}) {

    const user = usePage().props.auth.user;

    let [categories] = useState({
        Recent: [
        {
            id: 1,
            title: 'Does drinking coffee make you smarter?',
            date: '5h ago',
            commentCount: 5,
            shareCount: 2,
        },
        {
            id: 2,
            title: "So you've bought coffee... now what?",
            date: '2h ago',
            commentCount: 3,
            shareCount: 2,
        },
        ],
        Popular: [
        {
            id: 1,
            title: 'Is tech making coffee better or worse?',
            date: 'Jan 7',
            commentCount: 29,
            shareCount: 16,
        },
        {
            id: 2,
            title: 'The most innovative things happening in coffee',
            date: 'Mar 19',
            commentCount: 24,
            shareCount: 12,
        },
        ],
        Trending: [
        {
            id: 1,
            title: 'Ask Me Anything: 10 answers to your questions about coffee',
            date: '2d ago',
            commentCount: 9,
            shareCount: 5,
        },
        {
            id: 2,
            title: "The worst advice we've ever heard about coffee",
            date: '4d ago',
            commentCount: 1,
            shareCount: 2,
        },
        ],
    })

    const [activeTab, setActiveTab] = useState('Posts');

    return(
        <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Profile</h2>}
        >
            <Head title="Profile" />
            <div className="container mx-auto">

            <div className="relative">
                <img 
                    src="https://media.istockphoto.com/id/938171020/photo/book-stacking-open-book-hardback-books-on-wooden-table-and-pink-background-back-to-school-copy.jpg?s=1024x1024&w=is&k=20&c=TUeFn7g6kFBWls8ZpHOH8S9xXRz4_-2BiJI8nzCosAI=" 
                    className="w-full h-[200px] object-cover" /> 
                <img 
                    src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?w=740"
                    className="absolute left-[40px] w-[128px] h-[128px] -bottom-[40px] " />
            </div>

            <div className="">
                <Tab.Group>
                    <Tab.List className="pl-[200px] flex bg-white">
                        <TabItem selected={activeTab === 'Posts'} onClick={() => setActiveTab('Posts')}>
                            Posts
                        </TabItem>
                        <TabItem selected={activeTab === 'Followers'} onClick={() => setActiveTab('Followers')}>
                            Followers
                        </TabItem>
                    </Tab.List>
                    <Tab.Panels className="mt-2">

                        <Tab.Panel key="posts" className="bg-white p-3 shadow">
                            Post content
                        </Tab.Panel>

                        <Tab.Panel key="followers" className="bg-white p-3 shadow">
                            Followers
                        </Tab.Panel>

                    </Tab.Panels>
                </Tab.Group>
            </div>
        </div>
        </AuthenticatedLayout>
    )
}