import { useState } from "react";
import TextInput from "../TextInput";
import GroupItem from "./GroupItem";

export default function GroupList(){

    const [search, setSearch] = useState('')
    return(
        <div className="px-3">
            <h2 className='text-2xl font-bold mb-4'>Groups</h2>
            <TextInput placeholder="Type to search" value={search} onChange={(e) => setSearch(e.target.value)}/>
            <div className="py-8 px-3">
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