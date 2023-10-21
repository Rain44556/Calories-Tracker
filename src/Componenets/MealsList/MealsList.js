import React from 'react';
import './MealsList.css'
const MealsList = ({meals, clearMealHandler}) => {
   
    return (
        <div className='meals-container-wrapper'>{
            meals?.map((meal, idx)=>(
                <div key={idx} className='meals-container-wrapper-inner'>
                    <div>{`${meal.mealsName} : ${meal.calories}`}</div>
<div>
    <button className='btn-clear' onClick={()=>clearMealHandler(meal.id)}>Clear</button>
</div>
</div>
            ))}
           
        </div>
    );
};

export default MealsList;