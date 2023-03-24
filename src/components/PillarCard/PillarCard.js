import React from 'react'
import pillarData from "../pillarData.json"
import GaugeChart from 'react-gauge-chart'
import "./style.css";

function PillarCard() {

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
                <li>{list.list1}</li>
                <li>{list.list2}</li>
                <li>{list.list3}</li>
                <li>{list.list4}</li>
                <li>{list.list5}</li>
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