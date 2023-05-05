import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipies = ({ item }) => {

    const [favorite, setFavorite] = useState(true);


    const favoriteHandler = () => {
        toast("Added Favorite!")
        setFavorite(false);
    }

    return (

        <div className='border-2 p-5'>
            <h1 className='font-bold my-4 text-center'>{item.recipe_name}</h1>
            <h1 className='font-bold my-4 '>Ingredients</h1>
            <div>
                {
                    item.ingredients.map((ingredient, index) => <p key={index}>{index + 1}. {ingredient}</p>)
                }
            </div>
            <br />
            <h1 className='font-bold my-4 '>Cooking</h1>
            <div>
                {
                    item.cooking.map((cooking, index) => <p key={index}>{index + 1}. {cooking}</p>)
                }
            </div>

            <div className='my-4 flex justify-between items-center'>
                <h3><span className='font-semibold'>Rating:</span> {item.rating}</h3>
                <button onClick={favoriteHandler} disabled={!favorite} className="btn gap-2">
                    Favorite
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                </button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Recipies;