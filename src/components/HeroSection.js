import React from 'react';
import CreateProjectLogo from '../assets/createprojectlogo.png'
import Dashboard from './Dashboard';


const HeroSection = () => {
  return (
    <div className=' relative z-0 xl:static xl:max-w-[1022px] w-full mx-auto float-right p-10 hero-section '>
        <div className='w-full flex flex-col items-center justify-center xl:items-start '>
                <div className=' text-[#000000] font-[600] text-[40px] mb-10'>My Projects</div>

            {/* create new project card */}
            <div className='max-w-[404px] w-full h-[265px] bg-[#ffffff] flex flex-col gap-2 justify-center items-center rounded-lg'>
                <div className='max-w-[310px] h-[180px] w-full bg-[#FA782F] opacity-[40%] rounded-lg flex justify-center items-center'>
                    <img src={CreateProjectLogo} alt='logo' />
                </div>
                <div className='text-[#000000] font-[700]'>Create a new project</div>
                <div className=' font-[600] text-[#000000]'>or try a <span className='text-[#FA782F] font-[600]'>sample project</span></div>
            </div>

            <Dashboard/>

        </div>


    </div>
  )
}

export default HeroSection
