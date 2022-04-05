// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import asabenehImage from './images/asabeneh.jpg'
import html5 from './images/html5.jpg';
import cssI from './images/css.jpg';
import jsI from './images/javascript.jpg';
import reactI from './images/react.jpg';

// estilos de imagenes
const imagesStyle = {
  'text-align': 'center',
  backgroundColor: '#61DBFB',
}

const tamanio = {
  padding: '5px 10px 5px 10px',
  margin: '2px',
  display:'inline-block',
  width: '200px',
  'text-align': 'center',
}

const imgS = {
  width: '100%',
  height: 'auto',
}

// Estilos de suscribirse 
const suscribirseStyle = {
  'text-align': 'center',
  backgroundColor: '#61DBFB',
}

const interior = {
  padding: '10px 10px 5px 10px',
  margin: '10px',
  // display:'inline-block',
  // width: '200px',
  // 'text-align': 'center',
}

const inputs = {
  padding: '10px 10px 5px 10px',
  margin: '10px 10px 10px 10px',
  // display:'inline-block',
  // width: '200px',
  // 'text-align': 'center',
}

const interiorBoton = {
  padding: '10px 10px 5px 10px',
  margin: '10px',
  backgroundColor: 'orange',
  // display:'inline-block',
  // width: '200px',
  // 'text-align': 'center',
}

// carta estilos
const fotoStyle = {
  /* cambia estos dos valores para definir el tamaño de tu círculo */
    height: '100px',
    width: '100px',
    /* los siguientes valores son independientes del tamaño del círculo */
    'background-repeat': 'no-repeat',
    'background-position': '50%',
    'border-radius': '50%',
    'background-size': '100% auto',
}


// Header Component
const Header = () => (
  <header>
    <div className='header-wrapper'>
      <h1>Welcome to 30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Ivan Hernandez</p>
      <small>Oct 3, 2020</small>
    </div>
  </header>
)

// User Card Component
const UserCard = () => (
  <div className='user-card'>
    <img src={asabenehImage} alt='asabeneh image' />
    <h2>Ivan Hernandez</h2>
  </div>
)

const Imagenes = () => (
  <div style={imagesStyle}>
    <div style={tamanio}>
      <img src={html5} alt='html5 image' style={imgS} />
    </div>
    <div style={tamanio}>
      <img src={cssI} alt='cssI image' style={imgS}/>
    </div>
    <div style={tamanio}>
      <img src={jsI} alt='jsI image' style={imgS} />
    </div>
    <div style={tamanio}>
      <img src={reactI} alt='reactI image' style={imgS}/>
    </div>
  </div>
)

const Suscribirse = () => (
  <div style={suscribirseStyle}>
    <h1 style={interior} >Suscribirse</h1>
    <p style={interior} >Sing up with your email address to recive news and updates</p>
    <div style={interior} >
      <input type="text" value="First Name" style={inputs}></input>
      <input type="text" value="Last Name" style={inputs}></input>
      <input type="text" value="Email" style={inputs}></input>
    </div>
    <button name="button" style={interiorBoton} >Suscribirse</button>
  </div>
)


const Carta = () => (
  <div>
    <div >
      <img src={asabenehImage} alt='html5 image' style={fotoStyle} />
    </div>
    <h2>Ivan Hernandez</h2>
    <p>Developer, Mexico</p>
    <h2>Skills</h2>
    <div >
      <SkillsList />
    </div>
    <p>Joined on January 31, 2022</p>
  </div>
)

const SkillsList = () => {
  const skillst = {
    padding: '5px 5px 5px 5px ',
    margin: '5px',
    display:'inline-block',
    'border-radius': '30%',
    'text-align': 'center',
    backgroundColor: '#61DBFB',

  }
  const skills = ['HTML','CSS','Sass','JS','React','Redux','Node','Mongo DB','Python','Flask','Django','Numpy','Pandas','Data analysis','MySQL','GraphQL','D3.js','Gatsby','Docker','Geroku','Git']
  const skillsFormatted = skills.map((skill) => <div key={skill} style={skillst}>{skill}</div>)
  return skillsFormatted
}

// TechList Component
const TechList = () => {
  const techs = ['HTML', 'CSS', 'JavaScript']
  const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
  return techsFormatted
}

// Hexadecimal color generator
const hexaColor = () => {
  let str = '0123456789ABCDEF'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

const HexaColor = () => {
  let color = hexaColor()
  const hex = {
    padding:'1% 1% 1% 1%'

  }
  return <div style={{backgroundColor:color}}>{color}</div>
}

const Colores = () => {
return <div>
        <HexaColor />
        <HexaColor />
        <HexaColor />
        <HexaColor />
        <HexaColor />
        <HexaColor />
        </div>
}

// Main Component
const Main = () => (
  <main>
    <div className='main-wrapper'>
      <p>Prerequisite to get started react.js:</p>
      <ul>
        <TechList />
      </ul>
      <UserCard />
    </div>
  </main>
)

// Footer Component
const Footer = () => (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright 2020</p>
    </div>
  </footer>
)

// The App, or the parent or the container component
const App = () => (
  <div className='app'>
    <Header />
    <Main />
    <Footer />
    <Imagenes />
    <Suscribirse />
    <Carta />
    <Colores />
  </div>
)

const rootElement = document.getElementById('root')
// we render the App component using the ReactDOM package
ReactDOM.render(<App />, rootElement)