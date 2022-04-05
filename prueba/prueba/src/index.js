// index.js
import React from 'react'
import StorageList from './StorageList'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
// To get the root element from the HTML document
// JSX element, app


let padre = {
  justifyContent: 'center',
  alignItems: 'center'
}

const app = (
  <div className='app' style={padre} >
    {/* {header}
    {main}
    {footer} */}
    <div >
      <StorageList />
    </div>
  </div>
)

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement)