import React from 'react';
import Search from '../components/Search';
import TabsSwitch from '../components/TabsSwitch';
import Header from '../components/Header';
import Footer from '../components/Footer';
import meetingImg from '../images/meeting2.jpg';

function Homepage() {
  return (
    <div className="flex-grow">
      <Header showMore={true} />

      {/* Hero Section with Background */}
      <div className="relative w-full h-96 flex flex-col items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: `url(${meetingImg})` }}
        ></div>

        {/* Content Overlay */}
        <div className="relative flex flex-col items-center text-white w-full ">
          {/* Hero Text */}
          <h1 className="text-xl lg:text-4xl font-bold leading-relaxed tracking-wide font-montserrat text-center w-3/4 lg:w-1/2 ">
            Your Recruitment Partner
          </h1>

          {/* Search Component - Now on top of the background */}
          <div className='w-full'>
            <Search />
          </div>
        </div>
      </div>

      {/* TabsSwitch Below the Hero Section */}
      <TabsSwitch />

      <Footer />
    </div>
  );
}

export default Homepage;
