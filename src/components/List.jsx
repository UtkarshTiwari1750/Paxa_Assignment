import React from 'react';
import { HiDotsHorizontal } from "react-icons/hi";
import Card from './Card';

const List = ({list}) => {
  return (
    <div className='w-[288px] md:w-[362px] flex-shrink-0'>
        <div className='py-3 px-4 bg-gray-100 flex flex-shrink-0 items-center justify-between rounded-xl'>
            <h2 className='font-semibold font-Poppins text-base'>
                {list?.heading}
            </h2>

            <button className='text-gray-300 text-2xl'>
                <HiDotsHorizontal />
            </button>
        </div>

        <div className='overflow-y-scroll overflow-x-hidden h-full mt-3 flex flex-col flex-shrink-0 gap-y-3 pb-16'>
            {
                list?.cards?.map((card, key) => {
                    return (
                        <Card data={card} key={key}/>
                    )
                })
            }
            <div className='border-2 border-dashed flex items-center justify-center py-16 rounded-xl cursor-pointer font-Poppins text-base font-[500]'>
                <p>
                    + Add new card
                </p>
            </div>
        </div>

    </div>
  );
}

export default List;
