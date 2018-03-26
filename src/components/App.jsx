import React, {Component} from 'react'
import {Helmet} from 'react-helmet'
import favicon from '../../public/img/favicon.png'
import Home from './home/homepage.jsx'
import contactService from '../services/contact.service'

class App extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <link rel="icon" type="image/png" href={favicon}/>
                </Helmet>
                <Home/>
                <button className="btn btn-success" onClick={contactService.test}>Test Button</button>
            </div>
        )
    }
}

module.exports = App