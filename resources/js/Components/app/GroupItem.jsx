export default function GroupItem({ image, title, description }){
    return(
        <div className='gap-3 mb-3 cursor-pointer hover:bg-gray-200'>
            <div className="flex items-start gap-1 py-2 px-2">
                <img src={image} className=" w-[32px] rounded-full" />
                <div>
                    <h3 className='font-black text-lg'>{title}</h3>
                    <div className='text-xs text-gray-500'>{description}</div>
                </div>
            </div>
            
        </div>
    )
}