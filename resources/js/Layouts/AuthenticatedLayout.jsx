import { useState } from 'react';
import AppLogo from '../Assets/facebook.svg'
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faHome, faSearch, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import '../../css/navbar.css';

export default function AuthenticatedLayout({ user, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="navbar bg-white p-2">
                <div className="flex">
                    <Link href={route('home')}>
                        <img src={AppLogo} className='h-9' alt="" />
                    </Link>

                    <form className="flex mx-3">
                    <input
                        type="search"
                        className="form-control rounded"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="search-addon"
                    />
                    <span className="input-group-text border-0" id="search-addon">
                        <FontAwesomeIcon className="icon" icon={faSearch} />
                    </span>
                    </form>
                </div>

                <div className="navbar gap-4">
                    <NavLink href={route('home')} className='nav-item mx-3'> <FontAwesomeIcon className='icon' icon={faHome} /></NavLink>
                    <NavLink className='nav-item mx-3'> <FontAwesomeIcon className='icon' icon={faUserFriends} /></NavLink>
                    <NavLink className='nav-item mx-3'> <FontAwesomeIcon className='icon' icon={faBell} /></NavLink>
                </div>

                <div className="hidden sm:flex sm:items-center sm:ms-6">
                    <div className="ms-3 relative">
                        <Dropdown>
                            <Dropdown.Trigger>
                                <span className="inline-flex rounded-md">
                                    <button
                                        type="button"
                                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                    >
                                        {user.name}

                                        <svg
                                            className="ms-2 -me-0.5 h-4 w-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </span>
                            </Dropdown.Trigger>

                            <Dropdown.Content>
                                <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                <Dropdown.Link href={route('logout')} method="post" as="button">
                                    Log Out
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                </div>

                <div className="-me-2 flex items-center sm:hidden">
                    <button
                        onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                    >
                        <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path
                                className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                            <path
                                className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
                    <div className="pt-4 pb-1 border-t border-gray-200">
                        <div className="px-4">
                            <div className="font-medium text-base text-gray-800">{user.name}</div>
                            <div className="font-medium text-sm text-gray-500">{user.email}</div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route('profile.edit')}>Profile</ResponsiveNavLink>
                            <ResponsiveNavLink method="post" href={route('logout')} as="button">
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>
            
            <main>{children}</main>
        </div>
    );
}
