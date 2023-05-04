import React from 'react';

const Recipies = ({ item }) => {
    console.log(item.ingredients);
    return (
        <div className='border-2 p-5'>
            <h1 className='font-bold my-4 text-center'>{item.recipe_name}</h1>
            <div>
                {
                    item.ingredients.map((ingredient, index) => <p key={index}>{index + 1}. {ingredient}</p>)
                }
            </div>
        </div>
    );
};

export default Recipies;