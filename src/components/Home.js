import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import HeroSection from './HeroSection'
// import Dashboard from './Dashboard'



const Home = () => {
  return (
    <div className='bg-slate-500' >
      <Sidebar/>
      <Navbar/>
      <HeroSection/>

    </div>
  )
}

export default Home
