import React from 'react';
import { CgHeart } from "react-icons/cg";
import { HiOutlineGlobeAsiaAustralia } from "react-icons/hi2";
import Hard from "../assets/Hard.svg"; 
import {Users} from "../data/Images";
const Taskbar = () => {
  return (
    <div className='overflow-x-hidden'>  
        <div className='px-4 md:px-6 pt-7 flex md:flex-row flex-col flex-shrink-0 justify-between md:items-center '>
            <h2 className='font-Be-Vietnam font-semibold text-2xl'>
              Brackets
            </h2>
            <div className='flex justify-between items-center w-full md:pl-14'>
              <div className='flex justify-between items-center w-1/5'>
                <div className='flex items-center justify-between'>
                  <button className='text-gray-400 md:text-lg text-base'>
                    <CgHeart />
                  </button>

                  <div className='px-2 flex items-center justify-between'>
                    <div className='w-[1px] h-10 bg-gray-200'/>
                    
                    <button className='px-2 flex items-center gap-[1px]'>
                      <div className='text-gray-400 md:text-lg text-base'>
                        <HiOutlineGlobeAsiaAustralia />
                      </div>
                      <p className='text-gray-300 md:text-lg text-base'>
                        Public
                      </p>
                    </button>
                    
                    <div className='w-[1px] h-10 bg-gray-200'/>
                  </div>

                  <button className='text-gray-400 flex-shrink-0'>
                    <img src={Hard} alt="" 
                      className='md:w-5 md:h-5 w-4 h-4'
                    />
                  </button>
                </div>
              </div>

              <div className='flex items-center justify-between gap-x-2 md:gap-x-20'>
                <div className='flex items-center'>
                  {Users.data.slice(0, 5).map((user, key) => {
                    return (
                      <button key={key}
                        className='-ml-4'
                      >
                        <img src={user.image} alt="" 
                          className='w-7 h-7 md:w-11 md:h-11 rounded-full object-cover'
                        />
                      </button>
                    )
                  })}
                  <button className='-ml-4 bg-black text-white p-1 rounded-full w-7 h-7 md:w-11 md:h-11 text-xs' >
                    +{Users?.data?.length - 5}
                  </button>
                </div>

  
                <h3 className='md:text-xl text-base font-Be-Vietnam '>
                  Menu
                </h3>
              </div>

            </div>
        </div>
    </div>
  );
}

export default Taskbar;
