import React, { useContext, useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import LeftNavber from '../Conponents/Shared/LeftNavber/LeftNavber';
import { AiOutlineHome } from "react-icons/ai";

import { CgProfile } from "react-icons/cg";

import { MdOutlineExplore } from "react-icons/md";

import { BsBookmark, BsThreeDots } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { TbBrandMessenger } from "react-icons/tb";
import Footer from '../Conponents/Footer/Footer';
import { AuthContext } from '../Provider/AuthProvider';


const Main = () => {
  const { user, logOut } = useContext(AuthContext);
  const signOut = () => {
    logOut()
    .then(() => { })
    .catch(err => console.log(err));
  };

  const menuItems = <>

    <Link to="/" className="lg:flex justify-center items-center gap-3 text-xl hover:text-blue-600 duration-1000 font-semibold p-1 rounded-xl hidden text-white">

      <img src='' className='md:w-12 md:h-12 h-8 w-8' alt="logo" />

      <span>Tochat</span>

    </Link>

    <li className='bg-blue-900 text-white rounded-lg hover:bg-gray-400 hover:text-black duration-1000 pointer'>
      <NavLink to="/" className='flex gap-2 px-4 py-2 justify-center items-center'> <AiOutlineHome className='text-xl' /> Media </NavLink>
    </li>

    <li className='bg-blue-900 text-white rounded-lg hover:bg-gray-400 hover:text-black duration-1000 pointer'>
      <NavLink to="/explore" className='flex gap-2 px-4 py-2 justify-center items-center'> <MdOutlineExplore className='text-xl' /> #Explore</NavLink>
    </li>

    <li className='bg-blue-900 text-white rounded-lg hover:bg-gray-400 hover:text-black duration-1000 pointer'>
      <NavLink to="/profile" className='flex gap-2 px-4 py-2 justify-center items-center'> <CgProfile className='text-xl' /> Profile</NavLink>
    </li>

    <li className='bg-blue-900 text-white rounded-lg hover:bg-gray-400 hover:text-black duration-1000 pointer'>
      <NavLink to="/messages" className='flex gap-2 px-4 py-2 justify-center items-center'> <TbBrandMessenger className='text-xl' /> Messages</NavLink>
    </li>

    <li className='bg-blue-900 text-white rounded-lg hover:bg-gray-400 hover:text-black duration-1000 pointer'>
      <NavLink to="/notifications" className='flex gap-2 px-4 py-2 justify-center items-center'> <IoMdNotificationsOutline className='text-xl' /> #Notifications</NavLink>
    </li>

    <li className='bg-blue-900 text-white rounded-lg hover:bg-gray-400 hover:text-black duration-1000 pointer'>
      <NavLink to="/bookmarks" className='flex gap-2 px-4 py-2 justify-center items-center'> <BsBookmark /> #Bookmarks</NavLink>
    </li>

  </>

  const userSign = <>

    {/* <li className='bg-blue-900 text-white rounded-lg hover:bg-gray-400 hover:text-black duration-1000 pointer'>
      <div  className='flex gap-2 px-4 py-2 justify-center items-center'>
      <label htmlFor="login">
                <li className="">
                  Sign In
                </li>
              </label>
      </div>
    </li>

    
    <li className='bg-blue-900 text-white rounded-lg hover:bg-gray-400 hover:text-black duration-1000 pointer'>
      <NavLink to="/signout" className='flex gap-2 px-4 py-2 justify-center items-center'>Sign Out</NavLink>
    </li> */}
      <div>
              {user?.uid ? (
                <>
                  <div className="dropdown dropdown-top w-full cursor-pointer">
                    <label tabIndex={0} className="m-1">
                      <div className="flex justify-between items-center w-full cursor-pointer">
                        <div className="flex justify-center items-center">
                          <div className="avatar online">
                            <div className="w-14 rounded-full">
                              <img src={user?.photoURL} alt="" />
                            </div>
                          </div>
                          <div className="ml-3">
                            <p className="font-semibold text-xl">
                              {user?.displayName}
                            </p>
                          </div>
                        </div>
                        <span className="hover:bg-white p-4 rounded-full transition-colors duration-500 ">
                          <BsThreeDots />
                        </span>
                      </div>
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      <li>
                        <span onClick={signOut}>Log Out</span>
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <label htmlFor="login">
                    <li className="px-4 py-3 bg-blue-800 text-white font-semibold text-center rounded-lg cursor-pointer">
                      Sign In
                    </li>
                  </label>
                </>
              )}
            </div>

 

  </>

  return (
    <section>

      <LeftNavber></LeftNavber>

      <nav className="drawer drawer-mobile lg:h-[100vh] h-[calc(100vh-58px)]">

        <input
          id="left-drawer"
          type="checkbox"
          className="drawer-toggle"
     
        />

        <div className="drawer-content">
          <Outlet></Outlet>
        </div>


        <div className="drawer-side lg:border-r-2 border-gray-500">

          <label htmlFor="left-drawer" className="drawer-overlay"></label>

          <ul className="flex flex-col relative gap-2 justify-between p-6 w-60 border-r-2 border-gray-500 bg ">
            {/* bg */}

            {/* <ul className="menu gap-2 justify-between p-4 w-60 bg "> */}

            <div className='flex flex-col gap-2 '>
              {menuItems}

            </div>

            <div className='flex flex-col gap-2'>
              {userSign}
            </div>



          </ul>

        </div>

      </nav>
      <Footer></Footer>



    </section>
  );
};

export default Main;