import React from 'react';
// import Users from './Users';
// import User from './User';

const newUser=()=>{
    return(
        <div>
            <form>
            <input type ='text' placeholder='name'/>
                <label>Name:</label>
                     
                    Cohort: 
                    <input type ="text" placeholder='cohort'/>
                    Gender: 
                    <input type = "text" placeholder='gender'/>
                    Hobby: 
                    <input type = "text" placeholder ='hobby'/> 
            
                <input type ="Add User" value ="Add User"/>
            </form>
        </div>
    )
}
export default newUser;

    
