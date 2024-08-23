import React from 'react'
import { Link } from 'react-router-dom'

function Header({ showMore }) {
  return (
    <div className='flex justify-between bg-zinc-0 h-14 p-3 lg:p-10 w-full'>
      <Link to={"/"} className='flex gap-1 items-center'>
        <img src={require('../images/Maxi-Logo-cropped.png')} className='w-14 lg:w-16 p-2'  />
        <Link to={"/"} className='text-white text-lg font-montserrat hidden md:inline-block' >Recruitment Junction</Link>
      </Link>
      { showMore && <div className='flex items-center gap-2 lg:gap-4 text-xs lg:text-sm'>
        <div>
            <Link 
            className='text-white hover:text-zinc-400 font-montserrat'
            to={"/employer_login"}
            >Candidate Login</Link>
        </div>
        <div>
            <Link 
            className='bg-primary hover:bg-slate-900 p-2 rounded-lg text-white font-montserrat' 
            to={"/employer_login"}>Employers / Post a job</Link>
        </div>
      </div> }
    </div>
  )
}

export default Header
