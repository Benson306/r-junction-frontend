import React from 'react'
import JobCard from './JobCard'

function TopJobs() {
  const jobs = [
    {
      title: "Automation Engineer",
      postedOn: "06/08/2024",
      companyName: "Green Tech Malasia",
      logo: "malasyian.jpeg",
      location: "Kuala Lumpur",
      terms: "Full time",
      deadline: "06/09/2024"
    },
    {
      title: "Software Engineer I",
      postedOn: "31/01/2024",
      companyName: "Recruitment Junction",
      logo: "Maxi-Logo-cropped.png",
      location: "Nairobi",
      terms: "Full time",
      deadline: "31/05/2024"
    },
    {
      title: "Branch Manager",
      postedOn: "29/04/2024",
      companyName: "Equity Bank",
      logo: "equity.png",
      location: "Kisumu",
      terms: "Part time",
      deadline: "29/05/2024"
    },
    {
      title: "QA Engineer",
      postedOn: "01/07/2024",
      companyName: "Smart Acess Systems",
      logo: "smart-logo2.jpeg",
      location: "REMOTE",
      terms: "Part time",
      deadline: "01/09/2024"
    }
  ]
  return (
    <div className='flex flex-wrap justify-evenly'>

      {
        jobs.map(job => <JobCard 
                          title={job.title}
                          postedOn={job.postedOn} 
                          companyName={job.companyName}
                          logo={job.logo}
                          location={job.location}
                          terms={job.terms}
                          deadline={job.deadline}
                        /> 
                      )
      }
    </div>
  )
}

export default TopJobs
