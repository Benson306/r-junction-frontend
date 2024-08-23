import React from 'react'

function Header() {
  return (
    <div className='flex justify-between bg-zinc-0 h-14 p-3 lg:p-10 w-full'>
      <div className='flex gap-1 items-center'>
        <img src={require('../images/Maxi-Logo-cropped.png')} className='w-14 lg:w-16 p-2'  />
        <span className='text-white text-lg font-montserrat hidden md:inline-block' >Recruitment Junction</span>
      </div>
      <div className='flex items-center gap-2 lg:gap-4 text-xs lg:text-sm'>
        <div>
            <button className='text-white hover:text-zinc-400 font-montserrat'>Login</button>
        </div>
        <div>
            <button className='bg-primary hover:bg-slate-900 p-2 rounded-lg text-white font-montserrat'>Employers / Post a job</button>
        </div>
      </div>
    </div>
  )
}

export default Header
