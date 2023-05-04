/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/allData${id}`)
            .then((res) => res.json())
            .then(data => console.log(data.item))
    }, [])

    return (
        <div>
            <h2 className='font-bold text-center'>Recipes: {id}</h2>
        </div>
    );
};

export default ServiceDetails;