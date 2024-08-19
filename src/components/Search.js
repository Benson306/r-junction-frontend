import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Search() {
  return (
    <div className='bg-white w-8/12 lg:w-2/3 m-auto rounded-lg p-2 mt-10 flex font-montserrat'>
      <form className='block lg:flex items-center w-full'>
        <div className='flex mb-1 lg:mb-0 w-full lg:w-1/2 items-center'>
            <SearchIcon sx={{
                fontSize: "30px"
            }}/>
            <input type='text' placeholder='Job title, keywords or company' className='p-2 w-full'/>
        </div>
        <div className='flex mb-1 lg:mb-0 w-full lg:w-1/3 items-center'>
            <LocationOnIcon sx={{
                fontSize: "30px"
            }}/>
            <input type='text' placeholder='REMOTE' className='p-2 w-full'/>
        </div>
        <button className='bg-primary hover:bg-slate-800 text-white p-2 rounded-lg mb-1 lg:mb-0 w-full lg:w-1/6'>Search</button>
      </form>
    </div>
  )
}

export default Search
