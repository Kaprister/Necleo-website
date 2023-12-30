import React from 'react'
import Logo from '../assets/logo.png'
import MyProjectLogo from '../assets/myprojectlogo.png';
import SimpleProjectLogo from '../assets/sampleprojectlogo.png';
import AppLogo from '../assets/appslogo.png';
import IntroILogo from '../assets/intrologo.png';
import HelpLogo from '../assets/helplogo.png';
import FeedbackILogo from '../assets/feedbacklogo.png';
import CollapseLogo from '../assets/collapselogo.png';




const Sidebar = () => {
  return (
    <div className='hidden xl:flex fixed p-2 w-[241px] h-screen flex-col gap-5  justify-between  bg-[#FFFFFF] float-left'>

        <div className='flex flex-col gap-5 '>
            <img src={Logo} alt='logo' className='w-[76px] h-[27px] mx-auto' />
            <div className='w-[203px] h-[1px] bg-[#000000] mx-auto'></div>

            <div className='flex gap-2 pl-4 cursor-pointer'>
                <img src={MyProjectLogo} alt='logo' />
                <div className=' text-[#FA782F] font-[600]'>My Project</div>
            </div>

            <div className='flex gap-2 pl-4 cursor-pointer'>
                <img src={SimpleProjectLogo} alt='logo' />
                <div className=' text-[#C4C4C4] font-[600]' >Simple Project</div>
            </div>

            <div className='w-[203px] h-[1px] bg-[#000000] mx-auto'></div>

            <div className='flex gap-2 pl-4 cursor-pointer'>
                <img src={AppLogo} alt='logo'/>
                <div className=' text-[#C4C4C4] font-[600]' >Apps</div>
            </div>

            <div className='flex gap-2 pl-4 cursor-pointer'>
                <img src={IntroILogo} alt='logo'/>
                <div className=' text-[#C4C4C4] font-[600]'>Intro to Necleo</div>
            </div>

        </div>

        {/* ------------------------------------ */}

        <div className=' flex flex-col gap-5 pb-5'>
            <div className='flex gap-2 pl-4 cursor-pointer'>
                <img src={HelpLogo} alt='logo'/>
                <div className=' text-[#C4C4C4] font-[600]'>Help & Support</div>
            </div>

            <div className='flex gap-2 pl-4 cursor-pointer'>
                <img src={FeedbackILogo} alt='logo'/>
                <div className=' text-[#C4C4C4] font-[600]'>Feedback</div>
            </div>

            <div className='flex gap-2 pl-4'>
                <img src={CollapseLogo} alt='logo'/>
                <div className=' text-[#000000] font-[600]'>Collapse</div>
            </div>
        </div>

    </div>
  )
}

export default Sidebar
