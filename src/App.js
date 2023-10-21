import React, { useEffect, useState } from 'react';
import './App.css';
import TrackerBar from './Componenets/TrackerBar/TrackerBar';
import TrackerControlsCounter from './Componenets/TrackerControls/TrackerControlsCounter';
import TrackerControlsDelete from './Componenets/TrackerControls/TrackerControlsDelete';
import TrackerControlsInputs from './Componenets/TrackerControls/TrackerControlsInputs';
import MealsList from './Componenets/MealsList/MealsList';
import TrackerModal from './Componenets/TrackerModal/TrackerModal';
import MealsFilter from './Componenets/MealsFilter/MealsFilter';

const App = () => {
const [meals, setMeals] = useState([]);
const [mealsName, setMealsName] =useState("");
const [calories, setCalories] = useState(0);
const [openModal, setOpenModal] = useState(false);
const [filterSelected, setFilterSelected] = useState("");


const addMealsHandler = () =>{
 const mealsOld=meals ? [...meals] : [];
 const meal = {mealsName, calories,
  id: Math.floor(Math.random()*1000),
};

const mealsNew = mealsOld.concat(meal);
if(calories <= 0 || mealsName === ""){
  setOpenModal(true);
} else{
  setMeals(mealsNew);
  localStorage.setItem("meals",JSON.stringify(mealsNew));
}

setMealsName("");
setCalories(0);
};

const clearMealHandler =(id) =>{
const mealsOld = [...meals];
const mealsNew =mealsOld.filter((meal)=>meal.id !== id);
setMeals(mealsNew);
localStorage.setItem("meals",JSON.stringify(mealsNew));
}

const clearAllMeals = () =>{
  setMeals([]);
  localStorage.clear();
}

const total =meals !== null ? meals.map((meal)=>meal.calories).reduce((acc,value)=> acc + +value, 0) : 0;

 useEffect(() => {
  const oldState = [...meals];
  if(filterSelected === "Ascending"){
const mealsAscending = oldState.sort((a,b)=> a.calories - b.calories);
setMeals(mealsAscending);
  }else if(filterSelected === "Descending"){
    const mealsDescending = oldState.sort((a,b)=> b.calories- a.calories);
    setMeals(mealsDescending);
  }
}, [filterSelected]);

useEffect(()=>{
  const mealsLocalStorage = JSON.parse(localStorage.getItem("meals"));
setMeals(mealsLocalStorage);
}, [setMeals]);
  return (
    <div className="App">
      <TrackerBar></TrackerBar>
     { openModal ? <TrackerModal setOpenModal={setOpenModal}></TrackerModal> : ""}
      <TrackerControlsCounter total={total}></TrackerControlsCounter>
      <TrackerControlsDelete clearAllMeals={clearAllMeals}></TrackerControlsDelete>
      <TrackerControlsInputs addMealsHandler={addMealsHandler} mealsName={mealsName} calories={calories} setMealsName={setMealsName} setCalories={setCalories}></TrackerControlsInputs>

<div className='meals-container'>
  <MealsFilter filterSelected={filterSelected} setFilterSelected={setFilterSelected}></MealsFilter>
  <MealsList meals={meals} clearMealHandler={clearMealHandler}></MealsList>
</div>

    </div>
  );
}

export default App;
