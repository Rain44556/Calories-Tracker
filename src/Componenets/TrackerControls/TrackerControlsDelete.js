import React from 'react';
import './TrackerControlsDelete.css';
const TrackerControlsDelete = ({clearAllMeals}) => {
    return (
        <div className='clear-all'>
            <button className='btn-clear-all' onClick={()=>clearAllMeals()}>Clear All</button>
        </div>
    );
};

export default TrackerControlsDelete;