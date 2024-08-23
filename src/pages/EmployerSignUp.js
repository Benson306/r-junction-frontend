import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

function EmployerSignUp() {
  return (
    <div>
      <Header showMore={true} />
    <section className= 'mt-32 lg:mt-20 m-auto w-5/6 lg:w-1/3 bg-white border-slate-700 p-5 rounded-lg font-montserrat'>
      <div className='text-center mb-5 text-lg'>Register as an Employer</div>
      <form className='block'>
        <div>
          <input type="text" placeholder='Company name' className='border border-primary w-full rounded-lg p-3 mb-5 text-sm' />
        </div>
        <div>
          <input type="email" placeholder='Enter company email' className='border border-primary w-full rounded-lg p-3 mb-5 text-sm' />
        </div>
        <div>
          <input type="password" placeholder='Enter password' className='border border-primary w-full rounded-lg p-3 mb-3 text-sm' />
        </div>
        <div>
          <input type="password" placeholder='Confirm password' className='border border-primary w-full rounded-lg p-3 mb-3 text-sm' />
        </div>
        <div>
          <button className='bg-primary text-sm lg:text-base hover:bg-slate-800 text-white p-2 rounded-lg mb-1 lg:mb-0 w-full'>Register</button>
        </div>
        <div className='mt-5 hover:text-primary text-sm'>
            I already have an account? <Link to="/employer_login"><span className='underline hover:text-sky-400'>Log In</span></Link>
        </div>
      </form>
    </section>
    </div>
  )
}

export default EmployerSignUp
