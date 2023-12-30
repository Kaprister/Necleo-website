import React, { useState } from 'react';
import Image from '../assets/image.png';
import ArrowLogo from '../assets/arrowlogo.png';
import Logo from '../assets/logo.png';
import Sidemenu from './Sidemenu';


const Navbar = () => {

    const [isSidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };

  return (
    <div>
        <div className=' pl-7 bg-[#ffffff]  h-[58px] w-full xl:max-w-[1022px] flex justify-between items-center pr-5 xl:justify-end xl:float-right'>
            <div className='block xl:hidden'>
                <img src={Logo} alt='logo'/>
            </div>
            
            <div className=' flex gap-3 items-center'>
                <div className=' flex flex-col'>
                    <div className=' flex gap-2 items-center'>
                        <div className=' font-bold' >Free Trial</div>
                        <div className=' w-[3px] h-[16px] bg-[#000000]'></div>
                        <div>2days left</div>
                    </div>
                    <div className='text-[#FA782F] font-[500]'>Extended free trail</div>
                </div>
                <div>
                    <img src={Image} alt='img'/>
                </div>
                <button className='sidebar-btn' onClick={toggleSidebar}>
                    <img src={ArrowLogo} alt='arrow' className='w-[12px] h-[10px] hover:bg-slate-300'/>
                </button>
            </div>
        </div>
        
        {isSidebarVisible && 
            <div className=''>
                <Sidemenu/>
            </div>
        }

    </div>
  )
}

export default Navbar
