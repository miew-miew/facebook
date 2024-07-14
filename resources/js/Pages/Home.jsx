import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Home" />

            <div className="flex flex-col items-center justify-center py-8">
                {/* story */}
                <div className='flex flex-row space-x-4 mb-4'>
                    <div className='w-[140px] h-[250px] border rounded-lg bg-white'></div>
                    <div className='w-[140px] h-[250px] border rounded-lg bg-white'></div>
                    <div className='w-[140px] h-[250px] border rounded-lg bg-white'></div>
                    <div className='w-[140px] h-[250px] border rounded-lg bg-white'></div>
                </div>

                {/* ajouter du contenu */}
                <div className='flex flex-col bg-white border rounded-lg w-[500px] p-4 h-[150px] mb-4'>
                    <div className='flex flex-row space-x-2'>
                    <div className='h-[40px] w-[40px] border rounded-full'></div>
                    <input type="text" className='border-neutral-300 rounded-full w-full'/>
                    </div>
                    <div className='container border my-[20px] '></div>
                    <div className='flex flex-row justify-center space-x-6'>
                        <div className='flex flex-row'>
                            <p>Video en direct</p>
                        </div>
                        <div className='flex flex-row'>
                            <p>Photo / vidéo</p>
                        </div>
                        <div className='flex flex-row'>
                            <p>Humeur / activité</p>
                        </div>
                    </div>
                </div>

                {/* publication */}
                <div className='flex flex-col bg-white borde rounded-lg h-[500px] w-[500px] '>
                    <div className='p-2'>
                        <div className='flex flex-row space-x-2 pb-4'>
                            <div className='h-[40px] w-[40px] border rounded-full  '>
                            </div>
                            <div className='flex flex-col'>
                                <p className=''>Famenontsoa Ny Aina</p>
                            </div>
                        </div>
                        <p>yrefg cgxuielhzeiur gfzyer lzchexbg eygfelg</p>
                    </div>
                    <div className='container border h-[500px] mb-4'></div>
                    <div className='flex flex-row justify-center space-x-10'>
                        <div className='flex flex-row space-x-2 bottom-0'>
                            <FontAwesomeIcon icon={faHeart} />
                            <p>J'aime</p>
                        </div>
                        <div className='flex flex-row space-x-2'>
                            <FontAwesomeIcon icon={faHeart} />
                            <p>Commenter</p>
                        </div>
                        <div className='flex flex-row space-x-2'>
                            <FontAwesomeIcon icon={faHeart} />
                            <p>Partager</p>
                        </div>

                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
