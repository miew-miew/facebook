import { useState } from "react";
import TextInput from "../TextInput";
import GroupItem from "./GroupItem";

export default function GroupListItems () {

    const [search, setSearch] = useState('')
    return (
        <div className="lg:flex flex-col max-h-screen overflow-hidden">
            <TextInput placeholder="Type to search" value={search} className="w-full mt-4" onChange={(e) => setSearch(e.target.value)}/>
            <div className="mt-3 h-[200px] lg:flex-1 overflow-auto">
                { false ? (
                    <div className='text-gray-400 text-center p-3'>
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
                        <GroupItem 
                            image="https://picsum.photos/100" 
                            title="Laravel Developer" 
                            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
                        <GroupItem 
                            image="https://picsum.photos/100" 
                            title="React.js Developer" 
                            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
                        <GroupItem 
                            image="https://picsum.photos/100" 
                            title="Laravel Developer" 
                            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
                        <GroupItem 
                            image="https://picsum.photos/100" 
                            title="React.js Developer" 
                            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
                        <GroupItem 
                            image="https://picsum.photos/100" 
                            title="Laravel Developer" 
                            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
                        <GroupItem 
                            image="https://picsum.photos/100" 
                            title="React.js Developer" 
                            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
                        <GroupItem 
                            image="https://picsum.photos/100" 
                            title="Laravel Developer" 
                            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
                        <GroupItem 
                            image="https://picsum.photos/100" 
                            title="React.js Developer" 
                            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
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
    );
};