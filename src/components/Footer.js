import React from 'react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';

function Footer() {
    const date = new Date();
    const year = date.getFullYear();
  return (
    <div className='bg-black bg-opacity-40 w-full'>
        <div className='block lg:flex justify-evenly text-white font-montserrat p-4 mt-5'>
            <div>
                <div className='mb-2 text-base lg:text-lg mt-5 lg:mt-0 font-bold'>Contact Details</div>
                <div className='flex text-sm lg:text-base gap-2 items-center mb-1'>
                    <LocalPhoneIcon sx={{ fontSize: '20px'}} />
                    <button className='text-gray-400'>+254 7XX XXX XXX</button>
                </div>
                <div className='flex text-sm lg:text-base gap-2 items-center mb-1'>
                    <LocalPhoneIcon sx={{ fontSize: '20px'}} />
                    <button className='text-gray-400'>+254 7XX XXX XXX</button>
                </div>
                <div className='flex text-sm lg:text-base gap-2 items-center mb-1'>
                    <MailIcon sx={{ fontSize: '20px' }} />
                    <button className='text-gray-400'>info@rjunction.com</button>
                </div>
            </div>
            <div>
                <div className='mb-2 text-base lg:text-lg mt-5 lg:mt-0 font-bold'>Information</div>
                <div className='flex text-sm lg:text-base gap-2 items-center mb-1'>
                    <span className='text-gray-400'>Contact Us</span>
                </div>
                <div className='flex text-sm lg:text-base gap-2 items-center mb-1'>
                    <span className='text-gray-400'>Privacy Policy</span>
                </div>
                <div className='flex text-sm lg:text-base gap-2 items-center mb-1'>
                    <span className='text-gray-400'>FAQ</span>
                </div>
            </div>
            <div>
                <div className='mb-2 text-base lg:text-lg mt-5 lg:mt-0 font-bold'>T & C's</div>
                <div className='flex text-sm lg:text-base gap-2 items-center mb-1'>
                    <span className='text-gray-400'>Terms and Conditions</span>
                </div>
                <div className='flex text-sm lg:text-base gap-2 items-center mb-1'>
                    <span className='text-gray-400'>Help Center</span>
                </div>
            </div>
        </div>
        <div className='text-center font-montserrat p-2 text-white mt-5 mb-2 text-sm lg:text-base'>@Copyright {year}, All Rights Reserved</div>
    </div>
    
  )
}
export default Footer
