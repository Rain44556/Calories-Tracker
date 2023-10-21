import React from 'react';
import './TrackerControlsCounter.css';
const TrackerControlsCounter = ({total}) => {
    return (
        <div className='counter'>
            <h2>Total Calories: <span>{total}</span></h2>
        </div>
    );
};

export default TrackerControlsCounter;