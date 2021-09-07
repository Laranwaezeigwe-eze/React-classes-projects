import React from 'react';

const User = (props) =>{
    return(
        <div image>
        <img src= {props.src} alt={props.image} width="180px" height="180px"></img>
             <div userDetails>
           <p>Name: {props.name}</p> 
           <p>Gender: {props.gender}</p>
           <p>Cohort: {props.cohort}</p>
           <p>Hobby: {props.hobby}</p>
           
         <div button>
             <button>{props.btn}</button>
             </div>  
        </div>
        </div>
    )
}
export default User;