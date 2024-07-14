import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { Head } from '@inertiajs/react';

export default function Edit({ mustVerifyEmail, status }) {

    return (
        <div className='space-y-5'>
            <div className="p-4 sm:p-8 bg-white shadow-sm sm:rounded-lg">
                <UpdateProfileInformationForm
                    mustVerifyEmail={mustVerifyEmail}
                    status={status}
                    className="max-w-xl"
                />
            </div>

            <div className="p-4 sm:p-8 bg-white shadow-sm sm:rounded-lg">
                <UpdatePasswordForm className="max-w-xl" />
            </div>

            <div className="p-4 sm:p-8 bg-white shadow-sm sm:rounded-lg">
                <DeleteUserForm className="max-w-xl" />
            </div>
        </div>
    );
}
