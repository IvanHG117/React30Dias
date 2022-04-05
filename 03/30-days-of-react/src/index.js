// index.js
import React from 'react'
import ReactDOM from 'react-dom'
// To get the root element from the HTML document
import asabenehImage from './images/asabeneh.jpg'
import html5 from './images/html5.jpg';
import cssI from './images/css.jpg';
import jsI from './images/javascript.jpg';
import reactI from './images/react.jpg';
// JSX element, header
const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
}
const date = 'Oct 2, 2020'

// JSX element, header
const header = (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {author.firstName} {author.lastName}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
)

const numOne = 3
const numTwo = 2

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
)

const yearBorn = 1820
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge = (
  <p>
    {' '}
    {author.firstName} {author.lastName} is {age} years old
  </p>
)

// JSX element, main
const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li>{tech}</li>)

const user = (
  <div>
    <img src={asabenehImage} alt='asabeneh image' />
  </div>
)

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

const imagenes = (
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

// JSX element, main
const main = (
  <main>
    <div className='main-wrapper'>
      <p>
        Prerequisite to get started{' '}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <ul>{techsFormatted}</ul>
      {result}
      {personAge}
      {user}
    </div>
  </main>
)

const copyRight = 'Copyright 2020'

// JSX element, footer
const footer = (
  <footer>
    <div className='footer-wrapper'>
      <p>{copyRight}</p>
    </div>
  </footer>
)

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

const suscribirse = (
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

const skill = {
  padding: '5px 5px 5px 5px ',
  margin: '5px',
  display:'inline-block',
  'border-radius': '30%',
  'text-align': 'center',
  backgroundColor: '#61DBFB',

}

const carta = (
  <div>
    <div >
      <img src={asabenehImage} alt='html5 image' style={fotoStyle} />
    </div>
    <h2>Ivan Hernandez</h2>
    <p>Developer, Mexico</p>
    <h2>Skills</h2>
    <div >
      <div style={skill}>HTML</div>
      <div style={skill}>CSS</div>
      <div style={skill}>Sass</div>
      <div style={skill}>JS</div>
      <div style={skill}>React</div>
      <div style={skill}>Redux</div>
      <div style={skill}>Node</div>
      <div style={skill}>Mongo DB</div>
      <div style={skill}>Python</div>
      <div style={skill}>Flask</div>
      <div style={skill}>Django</div>
      <div style={skill}>Numpy</div>
      <div style={skill}>Pandas</div>
      <div style={skill}>Data analysis</div>
      <div style={skill}>MySQL</div>
      <div style={skill}>GraphQL</div>
      <div style={skill}>D3.js</div>
      <div style={skill}>Gatsby</div>
      <div style={skill}>Docker</div>
      <div style={skill}>Geroku</div>
      <div style={skill}>Git</div>
    </div>
    <p>Joined on January 31, 2022</p>
  </div>
)

// JSX element, app
const app = (
  <div className='app'>
    {/* {header}
    {main}
    {footer} */}
    {carta}
    {imagenes}
    {suscribirse}
  </div>
)

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement)