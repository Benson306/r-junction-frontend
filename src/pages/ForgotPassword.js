import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

function ForgotPassword() {
  return (
    <div>
      <Header showMore={true} />
    <section className= 'mt-32 lg:mt-20 m-auto w-5/6 lg:w-1/3 bg-white border-slate-700 p-5 rounded-lg font-montserrat'>
    <div className='text-center mb-5 text-lg'>Reset Password</div>
      <form className='block'>
        <div className='text-sm mb-5'>
            Enter the email address associated with your account and we'll send you a link to reset your password
        </div>
        <div>
          <input type="email" placeholder='Enter email' className='border border-primary w-full rounded-lg p-3 mb-5 text-xs' />
        </div>
        <div>
          <button className='bg-primary text-sm lg:text-base hover:bg-slate-800 text-white p-2 rounded-lg mb-1 lg:mb-0 w-full'>Continue</button>
        </div>
        <div className='mt-5 hover:text-primary text-sm text-center'>
            Don't have an account? <Link to={"/employer_signup"}><span className='underline hover:text-sky-400'>Register now</span></Link>
        </div>
      </form>
    </section>
    </div>
  )
}

export default ForgotPassword
