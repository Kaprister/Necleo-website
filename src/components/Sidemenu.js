import React from 'react'
import MyProjectLogo from '../assets/myprojectlogo.png';
import SimpleProjectLogo from '../assets/sampleprojectlogo.png';
import AppLogo from '../assets/appslogo.png';
import IntroILogo from '../assets/intrologo.png';
import HelpLogo from '../assets/helplogo.png';
import FeedbackILogo from '../assets/feedbacklogo.png';
import CollapseLogo from '../assets/collapselogo.png';



const Sidemenu = () => {
  return (
    <div className=' z-10 fixed flex p-2 w-[241px] h-screen flex-col gap-5  justify-between  bg-[#FFFFFF] opacity-[60%] float-left xl:hidden'>

        <div className='flex flex-col gap-5 '>
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

        <div className=' flex flex-col gap-5 pb-5 cursor-pointer'>
            <div className='flex gap-2 pl-4 '>
                <img src={HelpLogo} alt='logo'/>
                <div className=' text-[#C4C4C4] font-[600]'>Help & Support</div>
            </div>

            <div className='flex gap-2 pl-4 cursor-pointer'>
                <img src={FeedbackILogo} alt='logo'/>
                <div className=' text-[#C4C4C4] font-[600]'>Feedback</div>
            </div>

            <div className='flex gap-2 pl-4 cursor-pointer'>
                <img src={CollapseLogo} alt='logo'/>
                <div className=' text-[#000000] font-[600]'>Collapse</div>
            </div>
        </div>

    </div>
  )
}

export default Sidemenu
