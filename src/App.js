import React from 'react'
import "./App.css";
import {incNumber} from "./actions";
import {decNumber} from "./actions";

import { useSelector, useDispatch } from "react-redux";

const App = () => {

  // it alternative to the useContext hooks in react / consumer from context API
  const changeTheNumber = useSelector(state => state.changeTheNumber);
  
  const dispatch = useDispatch();

  return (
    <>
      <div className="main-div">
      

      <div class="container">
  
      <h1>Increment/Decrement counter</h1>
      <h4>using React and Redux</h4>
      
      <div class="quantity">
        <p class="quantity__minus" onClick={() => dispatch(decNumber(5))}><span>-</span></p>
        <input  type="text" class="quantity__input" value={changeTheNumber} />
        <p class="quantity__plus"  onClick={() => dispatch(incNumber(5))}><span>+</span></p>
      </div>
  
          </div>
        </div>
    </>
  )
}

export default App
