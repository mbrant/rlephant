import $ from 'jquery'
import React from 'react'
import ReactDOM from 'react-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './style.css'


import App from '../app/main/pages/app.react.jsx'

// entry point for creating bundle.js, brings in rest of files using import

ReactDOM.render(<App/>, document.getElementById('app'))