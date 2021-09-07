import React from 'react';
const Lara =(props)=>{
    return(
        <div>
            <p>My name is {props.name}.</p>
        <p> I am {props.height} tall.</p>
        <p> I am a {props.complexion} girl.</p>
        <p> I am a {props.gender}.</p>
        <p> I am {props.age} years old.</p>
        </div>
    )
}
export default Lara;