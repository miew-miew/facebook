import { useState } from "react";
import TextInput from "../TextInput";
import FriendItem from "./FriendItem";

export default function FriendListItems () {

    const [search, setSearch] = useState('')
    return (
        <div className="lg:flex flex-col max-h-screen overflow-hidden">
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
        </div>
    );
};