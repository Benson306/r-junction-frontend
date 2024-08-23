import React, { useState } from 'react';
import JobCard from './JobCard';
import TopJobs from './TopJobs';

function TabsSwitch() {
    const activeStyle = "text-center bg-black bg-opacity-50 w-1/2 p-2 hover:bg-opacity-80 hover:underline hover:text-sky-400";
    const defaultStyle = "w-1/2 text-center p-2 hover:underline hover:text-sky-400";

    const [topJobsActive, setTopJobsActive] = useState(true);

    return (
        <div className='font-montserrat text-white mt-10 lg:mt-16 '>
            <div className='flex w-3/4 m-auto justify-between shadow-sm shadow-black text-sm lg:text-base'>
                <button 
                    className={topJobsActive ? activeStyle : defaultStyle} 
                    onClick={() => setTopJobsActive(true)}
                >
                    Top Jobs
                </button>
                <button 
                    className={!topJobsActive ? activeStyle : defaultStyle} 
                    onClick={() => setTopJobsActive(false)}
                >
                    Top Recruiters
                </button>
            </div>
            <div className="mt-5 mb-5 w-full lg:w-5/6 mx-auto text-sm lg:text-base">
                {topJobsActive ? (
                    <div>
                        <TopJobs />
                    </div>
                ) : (
                    <div className='text-center'>Content for Top Recruiters</div>
                )}
            </div>
        </div>
    );
}

export default TabsSwitch;
