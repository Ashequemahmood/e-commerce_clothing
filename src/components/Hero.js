import React from 'react';
import WomanImg from '../img/woman_hero.png'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className='bg-pink-200 h-[800px] bg-cover bg-no-repeat bg-center py-24 bg-hero'>
      <div className='flex justify-around h-full mx-auto container'>
        {/* text */}
        <div className='flex flex-col justify-center'>
          <div className='font-semibold flex items-center uppercase'>
            <div className='w-10 h-[2px] bg-red-500 mr-3'></div>
            New Trend
          </div>
          <h1 className='text-[70px] leading-[1.1] font-light'>
            ATUMN SALE STYLISH <br />
            <span>WOMANS</span>
          </h1>
          {/*  */}
          <Link to={'/'} className='self-start uppercase font-semibold border-b-2 border-primary'>
            Discover More
          </Link>
        </div>
        
        {/* image */}
        <div className='hidden md:block'>
          <img src={WomanImg} alt="" />
        </div>
      </div>
    </section>
  )
};

export default Hero;
