import { useState } from "react";
import TextInput from "../TextInput";
import GroupItem from "./GroupItem";

export default function GroupList(){

    const [search, setSearch] = useState('')
    return(
        <div className="px-3 bg-white rounded border py-3 h-full overflow-hidden flex flex-col">
            <h2 className='text-xl font-bold mb-4'>Groups</h2>
            <TextInput placeholder="Type to search" value={search} className="w-full" onChange={(e) => setSearch(e.target.value)}/>
            <div className="py-8 flex-1 overflow-auto">
                { false ? (
                    <div className='text-gray-400 flex text-center'>
                        You are not joined to any groups
                    </div>
                ) : (
                    <div>
                        <GroupItem 
                            image="https://picsum.photos/100" 
                            title="Laravel Developer" 
                            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
                        <GroupItem 
                            image="https://picsum.photos/100" 
                            title="React.js Developer" 
                            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
                    </div>
                )}
            </div>
        </div>
    )
}