import 'jquery'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import 'bootstrap'
import './style.scss'
import React from 'react'
import { render } from 'react-dom'
import App from './components/App.jsx'


// entry point for creating bundle.js, brings in rest of files using import

render(<App />, document.getElementById('root'))