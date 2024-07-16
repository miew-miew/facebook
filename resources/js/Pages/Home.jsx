import CreatePost from '@/Components/app/CreatePost';
import FriendList from '@/Components/app/FriendList';
import GroupList from '@/Components/app/GroupList';
import PostList from '@/Components/app/PostList';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Home({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Home" />
            <div className="grid lg:grid-cols-12 gap-3 p-4">
                <div className="lg:col-span-3 lg:order-1">
                    <div className="h-full overflow-auto max-h-screen">
                        <GroupList />
                    </div>
                </div>
                <div className="lg:col-span-3 lg:order-3">
                    <div className="h-full overflow-auto max-h-screen">
                        <FriendList />
                    </div>
                </div>
                <div className="lg:col-span-6 lg:order-2">
                    <div className="h-full overflow-auto max-h-screen">
                        <CreatePost />
                        <PostList />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
