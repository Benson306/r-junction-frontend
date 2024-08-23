import React from 'react'
import Search from '../components/Search'
import TabsSwitch from '../components/TabsSwitch'
import Header from '../components/Header'

function Homepage() {
  return (
    <div>
        <Header />
        <div className="text-xl lg:text-4xl mt-6 lg:mt-10 mb-10 text-center text-white w-3/4 lg:w-1/2 m-auto font-bold leading-relaxed tracking-wide font-montserrat">
          Discover Your Next Role – Kenya’s Top Job Listings All in One Place
        </div>
        <Search />
        <TabsSwitch />
    </div>
  )
}

export default Homepage
