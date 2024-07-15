import CreatePost from '@/Components/app/CreatePost';
import FriendList from '@/Components/app/FriendList';
import GroupList from '@/Components/app/GroupList';
import PostList from '@/Components/app/PostList';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Home({ auth }) {
    return (
        <AuthenticatedLayout 
        user={auth.user}>
            <Head title="Home" />
            <div className='grid grid-cols-12 gap-3'>
                <div className='col-span-3 py-6 px-3'>
                    <GroupList/>
                </div>
                <div className='col-span-6'>
                    <CreatePost/>
                    <PostList/>
                </div>
                <div className='col-span-3 py-6 px-3'>
                    <FriendList/>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
