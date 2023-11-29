import React from 'react';
import './TrackerModal.css';
const TrackerModal = ({setOpenModal}) => {
    return (
        <div className='modal'>
            <h4>Mandatory Meal Name And Calories Must Be Entered!!</h4>
            <button className='btn-close' onClick={()=>setOpenModal(false)}>Close</button>
        </div>
    );
};

export default TrackerModal;