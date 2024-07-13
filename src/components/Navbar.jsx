import React, { useRef, useState } from 'react';
import Logo from '../assets/Logo.svg';
import bar from "../assets/bar_graph.svg";
import User from "../assets/User.png";
import { LuSearch } from "react-icons/lu";
import { IoIosAddCircleOutline } from "react-icons/io";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { GoBell } from "react-icons/go";
import useOnClickOutside from '../hooks/useOnClickOutside';
const Navbar = () => {
    const [open, setOpen] = useState(false);
    const handleOnSearchClick = () => {
        if(window.innerWidth < 768){
            setOpen(!open);
        }
    }
    const ref = useRef();
    useOnClickOutside(ref, () => setOpen(false));

  return (
    <nav className='overflow-x-hidden'>
        {open 
            ? (
                <div
                    ref={ref} 
                    className='relative flex items-center w-full pt-4'
                > 
                    <input 
                        type="text"
                        className='bg-gray-100 rounded-full py-1 w-full px-3' 
                    />
                    <button 
                        onClick={handleOnSearchClick}
                        className='absolute right-3 font-bold md:text-black text-gray-400'>
                        <LuSearch />
                    </button>
                </div>
            )
            : (
                <div className='md:px-6 py-2 flex items-center justify-between border-b-2 border-gray-200'>
                    <div className='flex justify-between items-center gap-x-2'>
                        <h2 className='md:block hidden'>
                            <img src={Logo} alt="" />
                        </h2>

                        <div className='flex items-center justify-between md:px-4 pr-3'>
                            <div className='w-[1px] h-10 bg-gray-200 md:block hidden'/>
                            <div className='flex items-center gap-x-1 px-4 '>
                                <img src={bar} alt="Bar" />
                                <h3 className='font-Poppins text-lg md:block hidden'>
                                    Boards
                                </h3>
                            </div>
                            <div className='w-[1px] h-10 bg-gray-200 md:block hidden'/>
                        </div>

                        <div className='relative flex items-center'>
                            <input 
                                type="text"
                                className='bg-gray-100 rounded-full py-1 lg:w-96 w-52 md:block hidden px-3' 
                            />
                            <button 
                                onClick={handleOnSearchClick}
                                className='absolute right-3 font-bold md:text-black text-gray-400'>
                                <LuSearch />
                            </button>
                        </div>
                    </div>

                    <div className='flex items-center justify-between md:gap-x-8 gap-x-3 md:pr-0 pr-2'>
                        <button className='text-xl text-gray-400'>
                            <IoIosAddCircleOutline />
                        </button>
                        <button className='text-xl text-gray-400'>
                            <HiOutlineExclamationCircle />
                        </button>
                        <button className='text-xl text-gray-400'>
                            <GoBell />
                        </button>

                        <img 
                            src={User} 
                            alt="Profile Image"
                            className='w-10 h-10 rounded-full object-cover' 
                        />
                    </div>
                </div>
            )
        }
    </nav>
  );
}

export default Navbar;
