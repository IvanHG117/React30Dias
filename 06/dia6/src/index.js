import React from 'react'
import ReactDOM from 'react-dom'

const primoS = {
  backgroundColor: 'red',
  width: '10%',
  height: '100px',
  margin: '1em',
  textAlign: 'center',
  float: 'left'
}

const parS = {
  backgroundColor: 'green',
  width: '10%',
  height: '100px',
  margin: '1em',
  textAlign: 'center',
  float: 'left'
}

const otrosS = {
  backgroundColor: 'yellow',
  width: '10%',
  height: '100px',
  margin: '1em',
  textAlign: 'center',
  float: 'left'
}

let textoCentrado = {
  textAlign: 'center'
}

const Numbers = ({ numbers }) => {
  // modifying array to array of li JSX
  const list = numbers.map((number) => <li key={number}>{number}</li>)
  return list
}


const skills = [
  ['HTML', 10],
  ['CSS', 7],
  ['JavaScript', 9],
  ['React', 8],
]

// Skill Component
const Skill = ({ skill: [tech, level] }) => (
  <li>
    {tech} {level}
  </li>
)

// Skills Component
const Skills = ({ skills }) => {
  const skillsList = skills.map((skill) => <Skill key={skill.skill} skill={skill} />)
  // console.log(skillsList)
  return <ul>{skillsList}</ul>
}


const countries = [
  { name: 'Finland', city: 'Helsinki' },
  { name: 'Sweden', city: 'Stockholm' },
  { name: 'Denmark', city: 'Copenhagen' },
  { name: 'Norway', city: 'Oslo' },
  { name: 'Iceland', city: 'Reykjavík' },
]

// Country component
const Country = ({ country: { name, city } }) => {
  return (
    <div>
      <h1>{name}</h1>
      <small>{city}</small>
    </div>
  )
}

// countries component
const Countries = ({ countries }) => {
  const countryList = countries.map((country) => (
    <Country key={country.name} country={country} />
  ))
  return <div>{countryList}</div>
}


const esPrimo = numero =>{
  // Casos especiales
	if (numero.numero == 0 || numero.numero == 1 || numero.numero == 4) return false;
	for (let x = 2; x < numero.numero / 2; x++) {
		if (numero.numero % x == 0) return false;
	}
	// Si no se pudo dividir por ninguno de los de arriba, sí es primo
	return true;
}

const esPar = numero => {
	if (numero.numero % 2  ) {return false}
  else { return true}	
}

const Numbersto30 = ({ numbers }) => {
  // modifying array to array of li JSX
  const list = numbers.map((number) => <TrataDeNumeros numero={number} />)
  return list
}

const TrataDeNumeros = ({numero}) => {
  let primo = esPrimo({numero})
  let par = esPar({numero})
  // console.log(numero,primo, par)
  if (numero == 0) {
    return <div key={numero} style={parS} >{numero}</div>
  }
  if (primo) {
    return <div key={numero} style={primoS} >{numero}</div>
  }
  else{
    if (par){
      return <div key={numero} style={parS}>{numero}</div>
    }
    else{
      return <div key={numero} style={otrosS}>{numero}</div>
    }
  }
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
  let colores = []
  for (let i = 0; i< 32; i++){
    let color = hexaColor()
    colores.push(color)
  } 
  
  const list = colores.map((color) => <div style={{backgroundColor:color, width: '10%',
                      height: '100px',
                      margin: '1em',
                      textAlign: 'center',
                      float: 'left'}}>{color}</div>)
  return list
}

const Colores = () => {
  return <div>
        <HexaColor />
        
        </div>
}


const WorldPopulation = ({ tenHighestPopulation }) => {
  // modifying array to array of li JSX
  const list = tenHighestPopulation.map((ten) => <div key={ten.population}>{ten.population} - - - {ten.country}</div>)
  return list
}
// App component

const App = () => {
  const numbers = [1, 2, 3, 4, 5]
  let numbersTo30 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
  let tenHighestPopulation = [
    { country: 'World', population: 7693165599 },
    { country: 'China', population: 1377422166 },
    { country: 'India', population: 1295210000 },
    { country: 'United States of America', population: 323947000 },
    { country: 'Indonesia', population: 258705000 },
    { country: 'Brazil', population: 206135893 },
    { country: 'Pakistan', population: 194125062 },
    { country: 'Nigeria', population: 186988000 },
    { country: 'Bangladesh', population: 161006790 },
    { country: 'Russian Federation', population: 146599183 },
    { country: 'Japan', population: 126960000 },
  ]

    const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };

  const config = {
    type: 'line',
    data: data,
    options: {}
  };

  return (
    <div className='container'>
      <div>
        <h1>Numbers List</h1>
        <ul>
          <Numbers numbers={numbers} />
        </ul>
      </div>

      <div>
        <h1>Skills Level</h1>
        <Skills skills={skills} />
      </div>

      <div>
        <h1>Countries List</h1>
        <Countries countries={countries} />
      </div>
      <div >
        <h1 style={textoCentrado}>30 days of react</h1>
        <h3 style={textoCentrado}>Generador de numeros</h3>
        <Numbersto30 numbers={numbersTo30} />
      </div>

      <div >
        <h1 style={textoCentrado}>30 days of react</h1>
        <h3 style={textoCentrado}>Generador de hexadecimal</h3>
        <Colores />
      </div>

      <div >
        <h1 style={textoCentrado}>30 days of react</h1>
        <h3 style={textoCentrado}>World Population</h3>
        <WorldPopulation tenHighestPopulation={tenHighestPopulation} />
      </div>

      
  );
      
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)