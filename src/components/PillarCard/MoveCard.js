import React, { useState, useEffect } from 'react'
import pillarData from "../pillarData.json"
import GaugeChart from 'react-gauge-chart';

/* UseState to track  changes for clicked items, useState to monitor for any changes */

function MoveCard() {
    const [moveScore, setMoveScore] = useState(JSON.parse(localStorage.getItem("MoveScore")) || []);
    const [movePercent, setMovePercent] = useState()

    const movePillar = pillarData[1]

    

     /* conditional render based on ischecked being true*/

    function handleCheckedBox(e) {
        console.log(e)
        const currentVal = e.target.value;
        const isChecked = e.target.checked;

        if(isChecked) {

            setMoveScore([...moveScore, currentVal ])
        } else {
            setMoveScore(moveScore.filter(val => val !== currentVal))
        }

    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() =>{
        localStorage.setItem("MoveScore", JSON.stringify(moveScore));
        const updatedVal = moveScore.length / movePillar.toDo.list.length
        setMovePercent(updatedVal)

    },[moveScore])

    console.log(movePercent)

    const listItems = movePillar.toDo.list.map((item, index) =>  (
        <div key = {index}>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" onChange={handleCheckedBox} value={item} checked={moveScore.includes(item)} />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    {item}
                </label>
            </div>
        </div>
    ))

    return (
        
        <div className="container col-lg-3 col-md-6 col-sm-12 p-1 pillarContainer">
        <div className="card animate__animated animate__fadeInUp h-100 pillarCard">
          <div className="card-body">
            <h4 className="card-title text-center pillarCard-title">{movePillar.pillarName}</h4>
  
              <GaugeChart id="pillar-gauge" 
              nrOfLevels={20} 
              arcsLength={[0.2, 0.5, 0.3]}
              colors={['rgba(171, 13, 13, 0.8)','rgba(255, 220, 0, 0.8)', 'rgba(11, 150, 11, 0.8)']}
              percent={movePercent} 
              needleColor="rgba(48, 50, 78, 0.7)"
              textColor='rgb(50, 69, 32)'
              animateDuration='4000'
            // change the percent value inside the curly braces to change the gauge chart -this is where we need JS to calculate the number of todos done
              />
  
            {/* Render listitems */}
            {listItems}
            
          </div>
        </div>
        </div>
       
    )

}

export default MoveCard