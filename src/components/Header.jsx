import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

import { avatar } from '../assets/images'
import { hover } from '../animations'

const Header = () => {



    return (
        <header className='fixed top-0 inset-x-0 py-3 overflow-hidden flex items-center justify-between gap-8 px-4'>
            <NavLink
                to={'/'}
                className='flex items-center justify-start w-1/3'
            >
                <img
                    src={""}
                    alt="logo"
                    className='w-12'
                />
            </NavLink>

            
            <div className='w-1/3 border flex justify-center items-center'>
                <input type="search" className='w-full'/>
            </div>

            <nav className='flex items-center justify-end gap-8 w-1/3'>
                <ul className='hidden md:flex justify-center items-center gap-3'>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                </ul>

                <motion.div
                    {...hover}
                    className='w-12 h-12 rounded-full border shadow-md cursor-pointer overflow-hidden flex items-center justify-center'
                >
                    <img src={avatar} alt="" className='w-full h-full object-cover'/>
                </motion.div>
            </nav>

        </header>
    )
}

export default Header