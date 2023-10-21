import React from 'react';
import './TrackerControlsInputs.css'
const TrackerControlsInputs = ({addMealsHandler,mealsName, setMealsName, calories, setCalories}) => {
    const onAddMealsClick = () =>{
        addMealsHandler();
    };
    
    return (
        <div className='controls'>
            <div className='inputs'>
<input type='text' placeholder='Meal' value={mealsName} onChange={(e)=>setMealsName(e.target.value)}></input>
            <input type="number" placeholder='Calories' value={calories} onChange={(e)=>setCalories(e.target.value)} min={0}/>
           <button onClick={onAddMealsClick}>Add Meal</button>
            </div>
        </div>
    );
};

export default TrackerControlsInputs;