import React from 'react';

const Recipies = ({ item }) => {
    console.log(item.ingredients);
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

            <h3 className='my-4'><span className='font-semibold'>Rating:</span> {item.rating}</h3>
        </div>
    );
};

export default Recipies;