import React from 'react'
import { TiDelete } from "react-icons/ti";

const PatientList = ({hastalar,setHastalar}) => {
    
    
  return (
    <div>

    {

        hastalar.map((patient)=>(
 <div className={patient.isDone ? "trueStil" : "falseStyle"} key={patient.id}>

<div>
    <h2>{patient.patientName}</h2>
    <h4>{patient.day}</h4>
    <h3>{patient.myDoctor}</h3>
</div>


<TiDelete 
onClick={()=>setHastalar(hastalar.filter((b)=>b.id!==patient.id))}

style= {{color:"red"}}/>

 </div>
    

        ))
    }
    </div>
  )
}

export default PatientList