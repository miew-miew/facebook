import { useState } from "react";
import TextInput from "../TextInput";
import FriendItem from "./FriendItem";

export default function FriendList(){

    const [search, setSearch] = useState('')
    return(
        <div className="px-3 bg-white rounded border py-3">
            <h2 className='text-xl font-bold mb-4'>Friends</h2>
            <TextInput placeholder="Type to search" value={search} className="w-full" onChange={(e) => setSearch(e.target.value)}/>
            <div className="py-8 px-3">
                { false ? (
                    <div className='text-gray-400 flex text-center'>
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
                    </div>
                )}
            </div>
        </div>
    )
}