import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";

const LeftNavber = ({ setDrawer }) => {
    return (
        <div className='flex justify-between items-center lg:hidden'>
        <img src=''alt="" className='w-2/12' />
    <div className="">
      <label
        htmlFor="drawer"
        tabIndex={2}
        className="btn btn-ghost lg:hidden"
        onClick={() => setDrawer(true)}
      >
        <GiHamburgerMenu className='text-3xl'/>
      </label>
    </div>
  </div>
    );
};

export default LeftNavber;