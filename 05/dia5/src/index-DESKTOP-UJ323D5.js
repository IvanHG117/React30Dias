import React from 'react'
import ReactDOM from 'react-dom'
import asabenehImage from './images/asabeneh.jpg'
import html5 from './images/html5.jpg';
import cssI from './images/css.jpg';
import jsI from './images/javascript.jpg';
import reactI from './images/react.jpg';


// estilos de imagenes
const imagesStyle = {
  'textAlign': 'center',
  backgroundColor: '#61DBFB',
}

const tamanio = {
  padding: '5px 10px 5px 10px',
  margin: '2px',
  display:'inline-block',
  width: '200px',
  'textAlign': 'center',
}

const imgS = {
  width: '100%',
  height: 'auto',
}

// Estilos de suscribirse 
const suscribirseStyle = {
  'textAlign': 'center',
  backgroundColor: '#61DBFB',
}

const interior = {
  padding: '10px 10px 5px 10px',
  margin: '10px',
  // display:'inline-block',
  // width: '200px',
  // 'textAlign': 'center',
}

const inputs = {
  padding: '10px 10px 5px 10px',
  margin: '10px 10px 10px 10px',
  // display:'inline-block',
  // width: '200px',
  // 'textAlign': 'center',
}

const interiorBoton = {
  padding: '10px 10px 5px 10px',
  margin: '10px',
  backgroundColor: 'orange',
  // display:'inline-block',
  // width: '200px',
  // 'textAlign': 'center',
}


// carta estilos
const fotoStyle = {
  /* cambia estos dos valores para definir el tamaño de tu círculo */
    height: '100px',
    width: '100px',
    /* los siguientes valores son independientes del tamaño del círculo */
    'backgroundRepeat': 'no-repeat',
    'backgroundPosition': '50%',
    'borderRadius': '50%',
    'backgroundSize': '100% auto',
}

// Fuction to show month date year

const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}

// Header Component
const Header = ({
  data: {
    welcome,
    title,
    subtitle,
    author: { firstName, lastName },
    date,
  },
}) => {
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName} {lastName}
        </p>
        <small>{showDate(date)}</small>
      </div>
    </header>
  )
}

// TechList Component
const TechList = ({ techs }) => {
  const techList = techs.map((tech) => <li key={tech}>{tech}</li>)
  return techList
}

// User Card Component
const UserCard = ({ user: { firstName, lastName, image } }) => (
  <div className='user-card'>
    <img src={image} alt={firstName} />
    <h2>
      {firstName}
      {lastName}
    </h2>
  </div>
)

// A button component

const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
)

// CSS styles in JavaScript Object
const buttonStyles = {
  backgroundColor: '#61dbfb',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: 3,
  cursor: 'pointer',
  fontSize: 18,
  color: 'white',
}

// Main Component
const Main = ({ user, techs, greetPeople, handleTime }) => (
  <main>
    <div className='main-wrapper'>
      <p>Prerequisite to get started react.js:</p>
      <ul>
        <TechList techs={techs} />
      </ul>
      <UserCard user={user} />
      <Button text='Greet People' onClick={greetPeople} style={buttonStyles} />
      <Button text='Show Time' onClick={handleTime} style={buttonStyles} />
    </div>
  </main>
)


const Imagenes = (props) => {
  const imagenes = props.imgs.map((img) => <div style={tamanio}> <img src={img} alt='html5 image' style={imgS} /> </div>)
  return <div style={imagesStyle}>
          {imagenes}
          </div>
}

const Suscribirse = (props) => {
  let valores = props.valores.map((valor) => <input type="text" value={valor} style={inputs}></input>)
  return <div style={suscribirseStyle}>
          <h1 style={interior} >Suscribirse</h1>
          <p style={interior} >Sing up with your email address to recive news and updates</p>
          <div style={interior} >
            {valores}
          </div>
          <button name="button" style={interiorBoton} >Suscribirse</button>
        </div>
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

const Carta = (props) => {
  console.log(props.datos)
  return  <div>
            <div >
              <img src={props.datos.imagen} alt='html5 image' style={fotoStyle} />
            </div>
            <h2>{props.datos.nombre}</h2>
            <p>{props.datos.perfil}</p>
            <h2>Skills</h2>
            <div >
              <SkillsList skills={props.datos.skills} />
            </div>
            <p>Joined on January 31, 2022</p>
          </div>
  }


const SkillsList = ({skills}) => {
  const skillst = {
    padding: '5px 5px 5px 5px ',
    margin: '5px',
    display:'inline-block',
    'borderRadius': '30%',
    'textAlign': 'center',
    backgroundColor: '#61DBFB',

  }
  // console.log(skills)
  // const skills = ['HTML','CSS','Sass','JS','React','Redux','Node','Mongo DB','Python','Flask','Django','Numpy','Pandas','Data analysis','MySQL','GraphQL','D3.js','Gatsby','Docker','Geroku','Git']
  const skillsFormatted = skills.map((skill) => <div key={skill} style={skillst}>{skill}</div>)
  return skillsFormatted
}


// Footer Component
const Footer = ({ copyRight }) => (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright {copyRight.getFullYear()}</p>
    </div>
  </footer>
)

// The App, or the parent or the container component
// Functional Component
const App = () => {
  const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
    },
    date: new Date(), // date needs to be formatted to a human readable format
  }

  
  let datos = {
    imagen: asabenehImage,
    nombre: 'Ivan Hernandez',
    perfil: 'Developer, Mexico',
    skills : ['HTML','CSS','Sass','JS','React','Redux','Node','Mongo DB','Python','Flask','Django','Numpy','Pandas','Data analysis','MySQL','GraphQL','D3.js','Gatsby','Docker','Geroku','Git']
  }
  const date = new Date()
  const techs = ['HTML', 'CSS', 'JavaScript']
  // copying the author from data object to user variable using spread operator
  const user = { ...data.author, image: asabenehImage }

  const handleTime = () => {
    alert(showDate(new Date()))
  }
  const greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2020')
  }

  return (
    <div className='app'>
      <Header data={data} />
      <Main
        user={user}
        techs={techs}
        handleTime={handleTime}
        greetPeople={greetPeople}
      />

      <Imagenes imgs={[html5, cssI, jsI, reactI]} />
      <Suscribirse valores={['First Name', 'Last Name', 'Email']} />
      <Colores />
      <Carta datos={datos} />
      <Footer copyRight={date} />

    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)