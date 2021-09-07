import React,{useState} from 'react'

 const Wall = (props) => {
     const [plaster, setPlaster]= useState(false);
     const [paint, setPaint]= useState("");

const plasterWall=()=>{
setPlaster(true)
setPaint(props.backgroundColor)
}

const updatePaint=(paint)=>plaster ? setPaint(paint):null

    return (
        <div style={{backgroundColor:paint}}>{props.children}
            <button onClick={plasterWall}>
                Plaster me
             </button>  
             <button onClick={()=>updatePaint("crimson")} >
                 Paint me
              </button>   
            <h3>Wall</h3>
        </div>
    )
}
export default Wall;
