// import logo from './logo.svg';
// import './App.css';
// import newUser from './new';
// import User from './User';
import Roof from './house/Roof';
import Decking from './house/Decking';
import Window from './house/Window';
import Door from './house/Door';
import Wall from './house/Wall';
import Pillar from './house/Pillar';
import Room from './house/Room';
import Foundation from './house/Foundation';
import Land from './house/Land';
import axios from "axios";
import {useEffect} from 'react'
import './house/House.css'



function App() {
  useEffect(() => {
      axios.get('http://localhost:5000/pillar')
      .then(function (response){
        console.log(response);
      })
      .catch(function (error) {
        console.log(error)
      })
    }, [])

  return (
    <div className="App">
            
      {/* <User /> */}
      {/* <newUser /> */}

      <div className="roof">
      <Roof />
      </div>

      <Room>
        <div className="room1">
            <div className="pillar1"><Pillar /></div>
              <div className="wall1">
                <Wall backgroundColor="Yellow"/>
                  <div className="win1">
                  <Window />
                  <Window />
                  </div> 
              </div>
                <div className="pillar2"><Pillar /></div>
                  <div className="wall2">
                    <Wall backgroundColor="Yellow" />
                    <div className="win2">
                   <Window />            
                    <Door /> 
                    </div>
                  </div>
        </div>         
      </Room>

          <div className="deck"><Decking /></div>
      
      <Room>
        <div className="room2">
            <div className="pillar3"><Pillar /></div>      
              <div className="wall3">
                <Wall backgroundColor="Yellow" />           
                 <div className="door1">
                    <Door />
                    <Door />
                 </div>
              </div>  
                    <div className="pill4">
                      <Pillar />
                      <Pillar />
                    </div>
                        <div className="wal4"><Wall backgroundColor="Yellow"/>
                            <div className="windsor">
                                 <Window />            
                                 <Door />
                                 <Door />
                                 <Door />
                            </div>
                        </div>     
        </div>                                               
      </Room>
        <div className="founder"><Foundation /></div>
        <div className="lander"><Land /></div>

        </div>
  );
}

export default App;
