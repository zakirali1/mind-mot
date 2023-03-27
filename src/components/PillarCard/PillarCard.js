import React, { useEffect } from 'react'
import pillarData from "../pillarData.json"
import GaugeChart from 'react-gauge-chart'
import "./style.css";
import { useState } from 'react';


function PillarCard() {
 
 
  const [isChecked, setIsChecked]= useState({
    eat: [],
    move: [],
    relax: [],
    sleep: []

  })
  

  const handleCheckedBox = (event) =>{

    if(event.target.id === 0 ){
      setIsChecked(event.target.value, isChecked +1)
    }
    
    //console.log(event.target.value)
    //setIsChecked(event.target.value, isChecked +1)
    
    
    console.log(isChecked)
    
  }
    

  function handleSubmit (){
   
    console.log(handleCheckedBox)
  }



  return (
    pillarData && pillarData.map(pillar => (
      <div className="container col-lg-3 col-md-6 col-sm-12 p-1 pillarContainer">
      <div className="card animate__animated animate__fadeInUp h-100 pillarCard">
        <div className="card-body">
          <h4 className="card-title text-center pillarCard-title">{pillar.pillarName}</h4>

            <GaugeChart id="pillar-gauge" 
            nrOfLevels={20} 
            arcsLength={[0.2, 0.5, 0.3]}
            colors={['rgba(171, 13, 13, 0.8)','rgba(255, 220, 0, 0.8)', 'rgba(11, 150, 11, 0.8)']}
            percent={0.70} 
            needleColor="rgba(48, 50, 78, 0.7)"
            textColor='rgb(50, 69, 32)'
            animateDuration='4000'
          // change the percent value inside the curly braces to change the gauge chart -this is where we need JS to calculate the number of todos done
            />

          {/* LOOPING THROUGH TODOS */}
          {pillar.toDo && pillar.toDo.map(list => (
            <div key = {pillar.id}>

              <div className="form-check">

                <div>
                  <input className="form-check-input" type="checkbox"  onChange={handleCheckedBox} value= {list.list1}  />
                  <label className="form-check-label" for="flexCheckDefault">
                  {list.list1}
                  </label>
                </div>

                <div>
                  <input className="form-check-input" type="checkbox" onChange={handleCheckedBox} value={list.list2} />
                  <label className="form-check-label" for="flexCheckDefault">
                  {list.list2}
                  </label>
                </div>

                <div>
                  <input className="form-check-input" type="checkbox" onChange={handleCheckedBox} value={list.list3} />
                  <label className="form-check-label" for="flexCheckDefault">
                  {list.list3}
                  </label>
                </div>

                <div>
                  <input className="form-check-input" type="checkbox" onChange={handleCheckedBox} value={list.list4} />
                  <label className="form-check-label" for="flexCheckDefault">
                  {list.list4}
                  </label>
                </div>

                <div>
                  <input className="form-check-input" type="checkbox" onChange={handleCheckedBox} value={list.list5} />
                  <label className="form-check-label" for="flexCheckDefault">
                  {list.list5}
                  </label>
                </div>

              </div>

              <div>
                <button type="submit" onClick={handleSubmit}>Submit</button>
              </div>
              

            </div>
          ))}
          
          <a href="#" className="card-link">More details</a>
        </div>
      </div>
      </div>
    ))


  )
}

export default PillarCard