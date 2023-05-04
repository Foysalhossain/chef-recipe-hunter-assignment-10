/* eslint-disable no-unused-vars */
import React from 'react';
import image from '../../assets/banner/banner-img1.jpg'

const Home = () => {
    return (
        <div>
            <div className='py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  lg:py-20 flex flex-col items-center justify-between lg:flex-row'>
                {/* text-content */}
                <div className='text-left'>
                    <h2 className='lineHeight sm:text-4xl  md:text-5xl lg:text-5xl  font-bold'>Delicious Food In our Restaurent</h2>
                    <p className='py-4 sm:mr-0 md:mr-60 lg:mr-60 text-slate-500'>
                        From classic Chinese-American takeout to regional staples, learn to make these easy dishes at home.
                    </p>
                    <button className='px-3 py-3 text-white font-semibold'>
                        Get Started
                    </button>
                </div>
                {/* img */}
                <div className='w-full lg:w-[68%] lg:ml-auto h-56 sm:h-96'>
                    <img className='w-full h-full' src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;