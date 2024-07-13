import React from 'react';
import { FiPlus } from "react-icons/fi";
import { RiMessage2Line } from "react-icons/ri";
import { CgHeart } from "react-icons/cg";
import { IoAttach } from "react-icons/io5";

const Card = ({data}) => {
  return (
    <div className='py-3 px-4 bg-gray-100 rounded-xl'>
        {/*Card Image  */}
        <div>
            {
                data?.image && 
                <img src={data?.image} alt="Card Image" 
                    className='w-full h-[10.5rem] object-cover rounded-xl'
                />
            }
        </div>

        {/* Tags */}
        <div className='flex items-center gap-x-2 mt-3'>
            {data?.tags.length > 0 && data?.tags?.map((tag, key) => {
                console.log(tag);
                return (
                    <div key={key} 
                        style={{backgroundColor: tag.color}}
                        className={`rounded-full w-14 h-2 `}
                    />
                )
            })}
        </div>
        
        {/* Title & Description */}
        <div className='mt-2'>
            <h3 className='text-base font-Poppins '>
                {data?.title}
            </h3>
            {
                data?.description &&
                <p className='font-Poppins text-sm text-gray-400 font-light mt-1'>
                    {data?.description}     
                </p>
            }
        </div>

        {/* Members, Comments, Likes, Attachments */}
        <div className='flex items-center justify-between mt-8'>
            <div className='flex items-center'>
                {data?.members.length > 0 && data.members.slice(0, 5).map((user, key) => {
                return (
                    <button key={key}
                    className={`${key !== 0 && "-ml-4"}`}
                    >
                    <img src={user.image} alt="Member" 
                        className='w-8 h-8 rounded-full'
                    />
                    </button>
                )
                })}
                <button className={`${data?.members.length > 0 && "-ml-4"} bg-black text-white rounded-full w-8 h-8 text-xl flex items-center justify-center`}>
                    <FiPlus />
                </button>
            </div>

            <div className='flex items-center gap-x-3 text-gray-400'>
                <button className='flex items-center gap-x-1'>
                    <p className='font-light'>
                        {data.comments}
                    </p>
                    <RiMessage2Line />
                </button>

                <button className='flex items-center gap-x-1'>
                    <p className='font-light'>
                        {data.likes}
                    </p>
                    <CgHeart />
                </button>

                <button className='flex items-center'>
                    <p className='font-light'>
                        {data.attachments}
                    </p>
                    <IoAttach className='rotate-45 text-xl'/>
                </button>
            </div>

        </div>
    </div>
  );
}

export default Card;
