import React from 'react';
import './MealsFilter.css';
const MealsFilter = ({setFilterSelected,FilterSelected}) => {
    return (
        <div className='meals-select'>
            <select defaultValue={FilterSelected}
            onChange={(e)=> setFilterSelected(e.target.value)}>

                <option value=""></option>
                <option value="Ascending">Ascending</option>
                <option value="Descending">Descending</option>
                
            </select>
        </div>
    );
};

export default MealsFilter;