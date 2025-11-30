import React from 'react'
import { assets } from '../assets/assets'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false)
    const [token, setToken] = useState(true)
    return (
        <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>

            {/* LEFT - LOGO */}
            <img
                onClick={() => navigate('/')}
                className='w-20 cursor-pointer'
                src={assets.logo}
                alt=""
            />

            {/* CENTER - MENU (Desktop) */}
            <ul className='hidden md:flex items-start gap-5 font-medium'>
                <NavLink to='/'><li className='py-1'>HOME</li></NavLink>
                <NavLink to='/doctors'><li className='py-1'>ALL DOCTORS</li></NavLink>
                <NavLink to='/about'><li className='py-1'>ABOUT</li></NavLink>
                <NavLink to='/contact'><li className='py-1'>CONTACT</li></NavLink>
            </ul>

            {/* RIGHT SIDE - PROFILE + MENU ICON */}
            <div className='flex items-center justify-between gap-4 flex-1 md:flex-none'>

                {/* PROFILE DROPDOWN */}
                {token ? (
                    <div className='flex items-center gap-2 cursor-pointer group relative'>
                        <img className='w-8 rounded-full' src={assets.profile_pic} alt='Profile-Picture' />
                        <img className='w-2.5' src={assets.dropdown_icon} alt='Dropdwon-icon' />

                        <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                            <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                                <p onClick={() => navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                                <p onClick={() => navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                                <p onClick={() => { navigate('/login'); setToken(false) }} className='hover:text-black cursor-pointer'>Logout</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <button
                        className='bg-primary text-black px-4 py-2 rounded-full font-light hidden md:block'
                        onClick={() => navigate('/login')}
                    >
                        Create Account
                    </button>
                )}

                {/* MOBILE MENU ICON (RIGHT SIDE) */}
                <img
                    onClick={() => setShowMenu(true)}
                    className='w-6 md:hidden ml-auto'
                    src={assets.menu_icon}
                    alt="Menu icon"
                />
            </div>

            {/* MOBILE MENU DRAWER */}
            <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
                <div className='flex items-center justify-between px-5 py-6'>
                    <img className='w-36' src={assets.logo} alt="logo" />
                    <img className='w-7' onClick={() => setShowMenu(false)} src={assets.cross_icon} alt="Cross Icon" />
                </div>

                <ul className='flex flex-col item-center gap-2 mt-5 px-5 text-lg font-medium'>
                    <NavLink onClick={() => setShowMenu(false)} to={'/'}>Home</NavLink>
                    <NavLink onClick={() => setShowMenu(false)} to={'/doctors'}>ALL DOCTORS</NavLink>
                    <NavLink onClick={() => setShowMenu(false)} to={'/about'}>ABOUT</NavLink>
                    <NavLink onClick={() => setShowMenu(false)} to={'/contact'}>CONTACT</NavLink>
                </ul>
            </div>
        </div>

    )
}

export default Navbar