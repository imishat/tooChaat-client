import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png'
import err from '../../assets/err.json';

const LeftNavber = ({ setDrawer }) => {
    return (
        <div className='flex justify-between items-center px-5 py-2 rounded-lg lg:hidden border-b-2 border-gray-500'>

            <Link to="/" className="flex justify-center items-center gap-3 text-xl hover:text-blue-600 duration-1000 font-semibold p-1 rounded-xl text-white">

                <img src={Logo} className="md:w-12 md:h-12 h-8 w-8" alt="logo"/>

                <span>Tochat</span>

            </Link>

            <label htmlFor="left-drawer" tabIndex={2} className="btn btn-ghost lg:hidden text-white  transition-all border-0 duration-1000  bg ">


                <GiHamburgerMenu className='text-2xl' />

            </label>
        
            

        </div>
    );
};

export default LeftNavber;