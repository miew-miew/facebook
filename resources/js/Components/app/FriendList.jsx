import { useState } from "react";
import TextInput from "../TextInput";
import FriendItem from "./FriendItem";
import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import FriendListItems from "./FriendListItems";

export default function FriendList(){
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
                        <FriendListItems />
                    </Disclosure.Panel>
                </div>
            )}
            </Disclosure>

            <div className="hidden max-h-screen lg:flex flex-col overflow-hidden">
                <h2 className='text-xl font-bold mb-4'>Friends</h2>
                <FriendListItems />
            </div>

        </div>
    )
}