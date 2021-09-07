import React from "react";
import { ReactDOM } from "react";


const Header = () => (
  <header>
    <div className='header-wrapper'>
      <h1>Welcome to 30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Asabeneh Yetayeh</p>
      <small>Oct 3, 2020</small>
    </div>
  </header>
)

const UserCard =()=>(
  <div className='usesr-card'>
    <img src={flower}alt='flower imagae'/>
    <h2>Flower geng</h2>
  </div>
)

const TechList=()=>{
  const techs =['HTML','CSS','JavaScript']
  const techsFormatted = techs.map((tech)=><li key={tech}>{tech}</li>)
  return techsFormatted
}

const Main=()=>(
  <main>
    <div className='main-wrapper'>
      <p>Prerequisite to get started react.js</p>
      <ul>
        <TechList/>
      </ul>
      { <UserCard/> }
    </div>
  </main>
)

const Footer =()=>(
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright 2021</p>
    </div>
  </footer>
)

const App=()=>(
  <div className='app'>
    <Header/>
    <Main/>
    <Footer/>
  </div>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<App/>, rootElement)
