/* eslint-disable no-unused-vars */
import React from 'react';
import image1 from '../../assets/food-category/1.jpg';
import image2 from '../../assets/food-category/2.jpg';
import image3 from '../../assets/food-category/3.jpg';

const FoodCategoryList = () => {
    return (
        <div className=' my-28'>
            <div className='text-center'>
                <h2 className='text-3xl font-bold'>Food Category List</h2>
                <p className='py-5 text-slate-500'>World Best Delicious Food List are Here</p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                <div className='overflow-hidden text-left p-10 bg-[#F9F8FF] rounded-md'>
                    <img className='object-cover bg-[#EFEDFF] p-3 rounded-md' src={image1} />
                    <div className='pt-6'>
                        <h3 className='font-bold text-lg'>English Food Itmes</h3>
                        <p className='pt-2 text-slate-400'>100+ Food Items Available</p>
                    </div>
                </div>

                <div className='overflow-hidden text-left p-10 bg-[#F9F8FF] rounded-md'>
                    <img className='object-cover bg-[#EFEDFF] p-3 rounded-md' src={image2} />
                    <div className='pt-6'>
                        <h3 className='font-bold text-lg'>Chiness Food Itmes</h3>
                        <p className='pt-2 text-slate-400'>80+ Food Items Available</p>
                    </div>
                </div>

                <div className='overflow-hidden text-left p-10 bg-[#F9F8FF] rounded-md'>
                    <img className='object-cover bg-[#EFEDFF] p-3 rounded-md' src={image3} />
                    <div className='pt-6'>
                        <h3 className='font-bold text-lg'>Italian Food Itmes</h3>
                        <p className='pt-2 text-slate-400'>120+ Food Items Available</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FoodCategoryList;