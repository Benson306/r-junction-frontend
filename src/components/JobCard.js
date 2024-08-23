import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LaunchIcon from '@mui/icons-material/Launch';

function JobCard({ title, postedOn, companyName, logo, location, terms, deadline }) {
  console.log(logo)
  return (
    <div className='w-full lg:w-1/2 flex justify-center font-montserrat'>
      <div className='bg-black bg-opacity-50 border border-slate-700 p-2 rounded-lg text-white m-1 w-11/12 flex gap-4 font-montserrat'>
        <div className="lg:w-1/6 flex justify-center" >
          <img src={require(`../images/${logo}`)} className='w-20 lg:w-24 p-2 object-contain rounded-2xl'  />
        </div>
        <div className="w-5/6 mb-4" >
          <div className='block lg:flex w-full items-center justify-between'>
              <button className='text-white font-bold text-lg lg:text-xl hover:underline hover:text-primary'>{title}</button>
              <div className='text-slate-100 font-semibold text-xs mt-1 lg:mt-0'>Posted On: {postedOn}</div>
          </div>
          
          <div className='flex text-sm gap-4 lg:gap-8 items-center  mt-2 lg:mt-4'>
              <div className='text-sm mt-1 lg:mt-0'>
                  {companyName}
              </div>
              <div className='flex items-center gap-1 mt-1 lg:mt-0'>
                  <LocationOnIcon sx={{
                      fontSize: "18px"
                  }}/>
                  <span>{location}</span>
              </div>

          </div>
          <div className='flex text-sm gap-4 lg:gap-8 items-center mt-1 lg:mt-2'>
              <div className='text-sm mt-1 lg:mt-0'>
                  {terms}
              </div>
              <div className='flex items-center gap-2 lg:gap-4 mt-1 lg:mt-0'>
                  <span className='font-semibold'>Deadline:</span>
                  <span>{deadline}</span>
              </div>
          </div>
          <div>
              <button className='bg-primary hover:bg-slate-600 p-2 text-white text-sm mt-4 rounded-lg flex gap-1 items-center'>
                  <span>Apply Now</span>
                  <LaunchIcon sx={{fontSize:'18px'}} />
              </button>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default JobCard
