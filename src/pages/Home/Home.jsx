/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import image from '../../assets/banner/banner-img1.jpg'
import { key } from 'localforage';
import FoodCategoryList from '../../components/FoodCategoryList/FoodCategoryList';
import { Link, useNavigation } from 'react-router-dom';
import SpecialsFood from '../../components/SpecialsFood/SpecialsFood';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import LazyLoad from 'react-lazy-load';

const Home = () => {
    const [chefsServices, setChefsServices] = useState([])

    useEffect(() => {
        fetch('https://chef-recipe-hunter-server-foysalhossain.vercel.app/allData')
            .then(res => res.json())
            .then(data => setChefsServices(data))
            .catch(error => console.error(error))
    }, [])

    const navigation = useNavigation();
    if (navigation.state === 'loading') {
        return <LoadingSpinner></LoadingSpinner>
    }

    return (
        <div>
            <div className=' px-20 lg:px-0 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  lg:py-20 flex flex-col items-center justify-between lg:flex-row'>
                {/* text-content */}
                <div className='text-left sm:px-10 lg:px-0'>
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

            {/* chefs details */}
            <div className='container mx-auto'>
                <div className='text-center mb-4'>
                    <h2 className='text-3xl font-bold'>Featured Chefs</h2>
                    <p className='py-5 text-slate-500'>See Our Chefs Speciality</p>
                </div>

                <div className='mx-10 grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {chefsServices.map(chef =>
                        < div key={chef.id}>
                            <div className="card  w-full h-full gap-10 bg-base-100 shadow-xl">
                                <figure>
                                    <LazyLoad height={300}>
                                        <img src={chef.picture} alt="chef" />
                                    </LazyLoad>
                                </figure>
                                <div className="card-body">
                                    <h1 className="card-title text-2xl">{chef.name}</h1>
                                    <h2 className='font-semibold'>Years Of Experience: {chef.years_of_experience}</h2>
                                    <h2 className='font-semibold'>Numbers Of Recipe: {chef.num_of_recipes}</h2>
                                    <h2 className='font-semibold'>Numbers Likes: {chef.likes}</h2>
                                    <div className="card-actions mt-3">
                                        <Link to={`/allData/${chef.id}`}> <button className='px-3 py-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-md text-white font-semibold'>View Recipes</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div>
                    <FoodCategoryList></FoodCategoryList>
                    <SpecialsFood></SpecialsFood>
                </div>
            </div>
        </div >
    );
};

export default Home;