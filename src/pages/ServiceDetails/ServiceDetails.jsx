/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigation, useParams } from 'react-router-dom';
import Recipies from '../../components/Recipies/Recipies';

const ServiceDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    console.log(data);
    const [details, setDetails] = useState([])

    useEffect(() => {
        fetch(`https://chef-recipe-hunter-server-foysalhossain.vercel.app/allData/${id}`)
            .then((res) => res.json())
            .then(data => setDetails(data))
    }, [])


    const navigation = useNavigation();
    if (navigation.state === 'loading') {
        return <LoadingSpinner></LoadingSpinner>
    }

    return (
        <div className='p-8'>

            <div className='grid grid-cols-2 container mx-auto my-10'>
                <div>
                    <h2 className='font-bold my-2'>{details.name}</h2>
                    <h2 className='my-2'>{details.bio}</h2>
                    <h2 className='font-semibold my-2'>Experience: {details.years_of_experience}</h2>
                    <h2 className='font-semibold my-2'>Recipie: {details.num_of_recipes}</h2>
                    <h2 className='font-semibold my-2'>Likes: {details.likes}</h2>
                </div>
                <div>
                    <img className='w-3/6 mx-auto' src={details.picture} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {
                    details?.recipies?.map((item, index) => <Recipies key={index} item={item}></Recipies>)
                }

            </div>

        </div >
    );
};

export default ServiceDetails;