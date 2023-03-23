import React from 'react'
import pillarData from "../pillarData.json"

function PillarCard() {

    return (
      pillarData && pillarData.map(pillar => (
        
        <div className="card" style={{width: 200}}>
          <div className="card-body">
            <h5 className="card-title">{pillar.pillarName}</h5>
            <img className="card-img-top pro-image " alt={pillar.pillarName} src={pillar.image} />
            
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

      ))


    )
}

export default PillarCard