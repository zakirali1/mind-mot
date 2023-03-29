import React, { useEffect } from 'react'
import pillarData from "../pillarData.json"
import GaugeChart from 'react-gauge-chart'
import "./style.css";
import { useState } from 'react';
import Eat from './EatCard.js'
import Move from './MoveCard.js'
import Relax from './RelaxCard.js'
import Sleep from './SleepCard.js'


function PillarCard() {
 
  function handleCheckedBox() {

  }

   const listItems = pillarData.map((item, index) =>  (
    <div key = {item.key}>

              <div className="form-check">
            {item.toDo.list.map((item,index) => ( 
                <div>
                  <input className="form-check-input" type="checkbox"  onChange={handleCheckedBox} value={item}  />
                  <label className="form-check-label" for="flexCheckDefault">
                  {item[index]}
                  </label>
                </div>
                ))}
                </div>
                </div>
  ))
    



  return (
  <>
   
    <Eat />
    <Move />
    <Relax />
    <Sleep />
   
    </>
    )

  
}

export default PillarCard