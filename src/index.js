
// css //
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import './style.scss'

// scripts //
import '../node_modules/jquery/dist/jquery'
import '../node_modules/bootstrap/dist/js/bootstrap'
import '../node_modules/popper.js/dist/popper'

// react //
import React from 'react'
import { render } from 'react-dom'
import App from './components/App.jsx'


// renders app @root div in index.html

render(<App />, document.getElementById('root'))