import React, { useState } from 'react'
import '../Component/HeaderMenu.css';
import { Outlet, NavLink, Link } from "react-router-dom";
import { AiOutlineMenuFold, AiOutlineClose } from "react-icons/ai";

const HeaderMenu = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <div>
            <div className='w-full bg-[#e7ecf0] h-[80px] border-[#00518f] border-b-2'>
                <div className='flex justify-between w-[1240px h-full items-center px-4'>
                    {/* logo section  */}
                    <div className='text-center w-[20%]'>
                        <div className='flex justify-center items-center'>
                            <Link className='no-underline' to="/">
                                <span className='text-[40px] font-bold text-[#00518f]'>S</span><span className='text-[#333] text-[25px] self-end pb-[6px]'>manik</span>
                            </Link>
                        </div>
                    </div>
                    {
                        toggle ? <AiOutlineClose onClick={() => setToggle(!toggle)} className='block md:hidden text-[25px]' /> :

                            <AiOutlineMenuFold onClick={() => setToggle(!toggle)} className='block md:hidden text-[25px]' />

                    }

                    {/* menu section  */}
                    <ul className='w-[80%] h-full hidden md:flex items-center'>
                        <li className='px-[30px] py-[15px] text-[20px] font-semibold'>
                            <NavLink className="no-underline text-[#333]" to="/">Home</NavLink>
                        </li>
                        <li className='px-[30px] py-[15px] text-[20px] font-semibold'>
                            <NavLink className="no-underline text-[#333]" to="/services">Services</NavLink>
                        </li>
                        <li className='px-[30px] py-[15px] text-[20px] font-semibold'>
                            <NavLink className="no-underline text-[#333]" to="/blog">Blog</NavLink>
                        </li>
                        <li className='px-[30px] py-[15px] text-[20px] font-semibold'>
                            <NavLink className="no-underline text-[#333]" to="/about">About</NavLink>
                        </li>
                        <li className='px-[30px] py-[15px] text-[20px] font-semibold'>
                            <NavLink className="no-underline text-[#333]" to="/contact">Contact</NavLink>
                        </li>
                    </ul>

                    {/* mobile menu  */}

                    <ul className={`z-[9999] h-full block md:hidden fixed top-0 bg-[#333] text-[#fff] w-[235px] duration-500 py-[25px]
                    ${
                        toggle ? "left-0" : "left-[-100%]"
                    }`
                    }>
                        <li  onClick={() => setToggle(!toggle)} className='px-[30px] py-[15px] text-[17px] font-semibold'>
                            <NavLink className="no-underline text-[#fff]" to="/">Home</NavLink>
                        </li>
                        <li  onClick={() => setToggle(!toggle)} className='px-[30px] py-[15px] text-[17px] font-semibold'>
                            <NavLink className="no-underline text-[#fff]" to="/services">Services</NavLink>
                        </li>
                        <li  onClick={() => setToggle(!toggle)} className='px-[30px] py-[15px] text-[17px] font-semibold'>
                            <NavLink className="no-underline text-[#fff]" to="/blog">Blog</NavLink>
                        </li>
                        <li  onClick={() => setToggle(!toggle)} className='px-[30px] py-[15px] text-[17px] font-semibold'>
                            <NavLink className="no-underline text-[#fff]" to="/about">About</NavLink>
                        </li>
                        <li  onClick={() => setToggle(!toggle)} className='px-[30px] py-[15px] text-[17px] font-semibold'>
                            <NavLink className="no-underline text-[#fff]" to="/contact">Contact</NavLink>
                        </li>
                    </ul>

                </div>
            </div>

            <Outlet />
        </div>
    )
}

export default HeaderMenu;