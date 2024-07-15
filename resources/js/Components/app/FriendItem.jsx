export default function FriendItem({ image, name }){
    return(
        <div className='gap-3 mb-3 cursor-pointer hover:bg-gray-200'>
            <div className="flex items-center gap-2 py-2 px-2">
                <img src={image} className=" w-[32px] rounded-full" />
                <div>
                    <h3 className='font-black'>{name}</h3>
                </div>
            </div>
            
        </div>
    )
}