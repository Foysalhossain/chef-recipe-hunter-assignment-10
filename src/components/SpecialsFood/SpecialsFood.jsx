import React from 'react';
import image from '../../assets/food-category/5.jpg'

const SpecialsFood = () => {
    return (
        <div className='py-16 grid lg:grid-cols-2 gap-10 mx-10'>
            {/* img */}
            <div className='w-full h-full lg:ml-auto sm:h-96'>
                <img className='w-full h-full ' src={image} alt="" />
            </div>

            <div className='py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  lg:py-20 flex flex-col items-center justify-between lg:flex-row'>
                {/* text-content */}
                <div className='text-left'>
                    <h2 className='lineHeight sm:text-4xl  md:text-5xl lg:text-5xl  font-bold'>Special Food In our <br /> Restaurent</h2>
                    <p className='py-4 sm:mr-0 md:mr-60 lg:mr-60 text-slate-500'>
                        Create interactive experiences, such as table-side preparations or cooking classes, to engage customers and make their dining experience special and memorable.
                    </p>
                    <button className='px-3 py-3 text-white font-semibold'>
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SpecialsFood;