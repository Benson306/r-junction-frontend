import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

function EmployerLogin() {
  return (
    <div>
      <Header showMore={true} />
    <section className= 'mt-32 lg:mt-20 m-auto w-5/6 lg:w-1/3 bg-white border-slate-700 p-5 rounded-lg font-montserrat'>
      <div className='text-center mb-5'>Employers' Login</div>
      <form className='block'>
        <div>
          <input type="email" placeholder='Enter your email' className='border border-primary w-full rounded-lg p-3 mb-5 text-sm' />
        </div>
        <div>
          <input type="password" placeholder='Enter password' className='border border-primary w-full rounded-lg p-3 mb-3 text-sm' />
        </div>
        <div className='flex justify-end text-sm mb-2 text-primary hover:underline hover:text-sky-400'>
          <Link>Forgot Password?</Link>
        </div>
        <div>
          <button className='bg-primary text-sm lg:text-base hover:bg-slate-800 text-white p-2 rounded-lg mb-1 lg:mb-0 w-full'>Log In</button>
        </div>
        <div className='mt-5 hover:text-primary text-sm'>
            Don't have an account? <Link><span className='underline hover:text-sky-400'>Register now</span></Link>
        </div>
      </form>
    </section>
    </div>
  )
}

export default EmployerLogin
