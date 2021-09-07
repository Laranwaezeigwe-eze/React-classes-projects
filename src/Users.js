import React from 'react';
import User from './User';
// import newUser from './new';

const Users=() =>{
    return(
        <div> 
        <div><User src='female avatar.jpg' name ="Lara" gender ="Female" cohort ="Six" hobby="Singing" btn ="Delete User"/></div><br></br>
        <div><User src='fem2.jpg' name ="Faith" gender ="Female" cohort ="Seven" hobby="Dancing"  btn ="Delete User" /></div><br></br>
        <div><User src='john.png' name ="John" gender ="Male" cohort ="Two" hobby="Reading"  btn ="Delete User"/></div><br></br>
         <div><User src='legend.jpg' name ="Legend" gender ="Male" cohort ="Three" hobby="Chatting"  btn ="Delete User" /></div>
        </div>
    )
}
export default Users;

