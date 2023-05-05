import React from 'react';
import image from '../../assets/error-img/404.png'
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const obtainError = useRouteError();
    console.log(obtainError);
    return (
        <div>
            <div>
                <img className='mx-auto mt-10' src={image} alt="" />
            </div>

            <div className=' flex flex-col justify-center items-center'>
                <div className='border-2 border-red-400 p-10 rounded-md text-center'>
                    <h3 className='text-yellow-500 font-bold text-4xl'>{obtainError.statusText}</h3>
                    <h3 className='text-yellow-500 font-bold text-4xl'>{obtainError.status}</h3>
                    <h3 className='text-yellow-500 font-bold text-4xl'>{obtainError.error.message}</h3>
                </div>
            </div>

        </div>
    );
};

export default ErrorPage;