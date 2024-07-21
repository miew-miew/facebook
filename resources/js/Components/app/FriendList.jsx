import { useState } from "react";
import TextInput from "../TextInput";
import FriendItem from "./FriendItem";
import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

export default function FriendList(){

    const [search, setSearch] = useState('')
    return(
        <div className="px-3 bg-white rounded border py-3 h-full overflow-hidden flex flex-col">
            <Disclosure className="flex-1 flex flex-col lg:hidden">
            {({ open }) => (
                <div>
                    <Disclosure.Button className="w-full">
                        <div className="flex justify-between items-center">
                            <h2 className='text-xl font-bold'>Friends</h2>
                            <ChevronRightIcon className={`${open ? 'rotate-90 transform' : ''} h-6 w-6 transition-all`} />
                        </div>
                    </Disclosure.Button>
                    <Disclosure.Panel>
                        <TextInput placeholder="Type to search" value={search} className="w-full mt-4" onChange={(e) => setSearch(e.target.value)}/>
                        <div className="mt-3 h-[200px] flex-1 overflow-auto">
                            { false ? (
                                <div className='text-gray-400 text-center p-3'>
                                    You don't have friends yet
                                </div>
                            ) : (
                                <div>
                                    <FriendItem 
                                        image="https://avatar.iran.liara.run/public" 
                                        name="Mam'tiana Lydien" />
                                    <FriendItem 
                                        image="https://avatar.iran.liara.run/public" 
                                        name="Miantsa Faniriana" />
                                    <FriendItem 
                                        image="https://avatar.iran.liara.run/public" 
                                        name="Mam'tiana Lydien" />
                                    <FriendItem 
                                        image="https://avatar.iran.liara.run/public" 
                                        name="Miantsa Faniriana" />
                                    <FriendItem 
                                        image="https://avatar.iran.liara.run/public" 
                                        name="Mam'tiana Lydien" />
                                    <FriendItem 
                                        image="https://avatar.iran.liara.run/public" 
                                        name="Miantsa Faniriana" />
                                    <FriendItem 
                                        image="https://avatar.iran.liara.run/public" 
                                        name="Mam'tiana Lydien" />
                                    <FriendItem 
                                        image="https://avatar.iran.liara.run/public" 
                                        name="Miantsa Faniriana" />
                                    <FriendItem 
                                        image="https://avatar.iran.liara.run/public" 
                                        name="Mam'tiana Lydien" />
                                    <FriendItem 
                                        image="https://avatar.iran.liara.run/public" 
                                        name="Miantsa Faniriana" />
                                </div>
                            )}
                        </div>
                    </Disclosure.Panel>
                </div>
            )}
            </Disclosure>

            <div className="hidden max-h-screen lg:flex flex-col overflow-hidden">
                <h2 className='text-xl font-bold mb-4'>Friends</h2>
                <TextInput placeholder="Type to search" value={search} className="w-full" onChange={(e) => setSearch(e.target.value)}/>
                <div className="mt-3 flex-1 overflow-auto">
                    { false ? (
                        <div className='text-gray-400 text-center p-3'>
                            You don't have friends yet
                        </div>
                    ) : (
                        <div>
                            <FriendItem 
                                image="https://avatar.iran.liara.run/public" 
                                name="Mam'tiana Lydien" />
                            <FriendItem 
                                image="https://avatar.iran.liara.run/public" 
                                name="Miantsa Faniriana" />
                            <FriendItem 
                                image="https://avatar.iran.liara.run/public" 
                                name="Mam'tiana Lydien" />
                            <FriendItem 
                                image="https://avatar.iran.liara.run/public" 
                                name="Miantsa Faniriana" />
                            <FriendItem 
                                image="https://avatar.iran.liara.run/public" 
                                name="Mam'tiana Lydien" />
                            <FriendItem 
                                image="https://avatar.iran.liara.run/public" 
                                name="Miantsa Faniriana" />
                            <FriendItem 
                                image="https://avatar.iran.liara.run/public" 
                                name="Mam'tiana Lydien" />
                            <FriendItem 
                                image="https://avatar.iran.liara.run/public" 
                                name="Miantsa Faniriana" />
                            <FriendItem 
                                image="https://avatar.iran.liara.run/public" 
                                name="Mam'tiana Lydien" />
                            <FriendItem 
                                image="https://avatar.iran.liara.run/public" 
                                name="Miantsa Faniriana" />
                        </div>
                    )}
                </div>
            </div>

        </div>
    )
}