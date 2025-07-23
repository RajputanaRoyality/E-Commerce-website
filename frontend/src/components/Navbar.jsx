import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {

    const [visible, setVisible] = useState(false);
    const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext)

    const logout = () => {
        navigate('/login')
        localStorage.removeItem('token')
        setToken('')
        setCartItems({})
    }

    return (
        <div className='flex items-center justify-between py-4 font-medium bg-gray-200 z-1'>
            <Link to='/'><img src={assets.logo} alt="" className='ml-10 h-15 w-20' /><h2 className='ml-10 font-bold text-red-900'>Vaiso Store</h2></Link>

            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                <div className='flex flex-row gap-10'>
                <NavLink to='/' className='flex flex-col items-center gap-1 '>
                    <p>HOME</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

                <NavLink to='/collection' className='flex flex-col items-center gap-1 '>
                    <p>COLLECTION</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

                <NavLink to='/about' className='flex flex-col items-center gap-1 '>
                    <p>ABOUT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

                <NavLink to='/contact' className='flex flex-col items-center gap-1 '>
                    <p>CONTACT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                </div>

            </ul>

            <div className='flex items-center gap-8 mr-10'>
                <img onClick={() => setShowSearch(true)} src={assets.search_icon} className='w-5 pointer' alt="" />

                <div className='group relative'>
                    <img onClick={() => token ? null : navigate('/login')} className='w-5 cursor-pointer' src={assets.profile_icon} alt="" />
                    {/*Drop down Menu*/}
                    {token &&
                        <div className='group-hover:block hidden flex dropdown-menu right-0 pt-4'>
                            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                                <p className='cursor-pointer hover:text-black'>My Profile</p>
                                <p onClick={()=>navigate('/orders')} className='cursor-pointer hover:text-black'>Order</p>
                                <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
                            </div>
                        </div>
                    }
                </div>
                <Link to='/cart' className='relative'>
                    <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
                </Link>
                <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
            </div>

            {/*sidebar*/}
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-[300px] h-[270px] z-2' : 'w-0'}`} >
                <div className='flex items-center gap-4 p-3 cursor-pointer'>
                    <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3'>
                        <img src={assets.dropdown_icon} className='h-4 rotate-180' alt="" />
                        <p>Back</p>
                    </div>


                </div>
                <div className='flex py-2 m-1 pl-6 border'>
                    <NavLink onClick={() => setVisible(false)} to='/'>HOME</NavLink></div>
                <div className='py-2 m-1 pl-6 border'><NavLink onClick={() => setVisible(false)} to='/collection'>COLLECTION</NavLink></div>
                <div className='py-2 m-1 pl-6 border'><NavLink onClick={() => setVisible(false)} to='/about'>ABOUT</NavLink></div>
                <div className='py-2 m-1 pl-6 border'><NavLink onClick={() => setVisible(false)} to='/contact'>CONTACT</NavLink></div>

            </div>

        </div>
    )
}

export default Navbar