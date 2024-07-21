import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import GroupListItems from "./GroupListItems";

export default function GroupList(){
    return(
        <div className="px-3 bg-white rounded border py-3 h-full overflow-hidden flex flex-col">
            <Disclosure className="flex-1 flex flex-col lg:hidden">
            {({ open }) => (
                <div>
                    <Disclosure.Button className="w-full">
                        <div className="flex justify-between items-center">
                            <h2 className='text-xl font-bold'>Groups</h2>
                            <ChevronRightIcon className={`${open ? 'rotate-90 transform' : ''} h-6 w-6 transition-all`} />
                        </div>
                    </Disclosure.Button>
                    <Disclosure.Panel>
                        <GroupListItems/>
                    </Disclosure.Panel>
                </div>
            )}
            </Disclosure>

            <div className="hidden max-h-screen lg:flex flex-col overflow-hidden">
                <h2 className='text-xl font-bold'>Groups</h2>
                <GroupListItems/>
            </div>
        </div>
    )
}