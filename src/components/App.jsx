import React, {Component} from 'react'
import {Helmet} from 'react-helmet'
import favicon from '../../public/img/favicon.png'
import Home from './home/homepage.jsx'
import Navbar from './nav/navbar.jsx'
import Header from './about/header.jsx'
import contactService from '../services/contact.service'

class App extends Component {
    constructor() {
        super()
        
        this.state = {
            navCollapsed: true,
            lastCollapsedDiv: 'home',
            name: null,
            email: null,
            phone: null,
            company: null

        }

        this._onToggleNav = this._onToggleNav.bind(this)
        this._toggleCollapse = this._toggleCollapse.bind(this)
        this._handleName = this._handleName.bind(this)
        this._handleEmail = this._handleEmail.bind(this)
        this._handlePhone = this._handlePhone.bind(this)
        this._handleCompany = this._handleCompany.bind(this)
        this._onSubmit = this._onSubmit.bind(this)

    }

    _onSubmit(){
        let data = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            company: this.state.company
        }
        return contactService.test(data)
                .then(res => {console.log(res)
                    $('form')[0].reset()
                
                })
                .catch(err => {console.log(err)})
    }
    
    _handleName(e){
        this.setState({
            name: e.target.value 
        })
    }

    _handleEmail(e){
        this.setState({
            email: e.target.value 
        })
    }

    _handlePhone(e){
        this.setState({
            phone: e.target.value 
        })
    }

    _handleCompany(e){
        this.setState({
            company: e.target.value 
        })
    }

    _onToggleNav() {
        this.setState( prevState => {
           return  {navCollapsed: !prevState.navCollapsed}
        })
    }

    _toggleCollapse(triggerFromChild){
        if(this.state.lastCollapsedDiv === triggerFromChild){
            $(`#${this.state.lastCollapsedDiv}`).collapse('toggle')
        }else {
            $(`#${this.state.lastCollapsedDiv}`).collapse('toggle')
            $(`#${triggerFromChild}`).collapse('toggle')
            this.setState( {lastCollapsedDiv: triggerFromChild})
        }

    }

    render() {
        return (
            <div>
                <Helmet>
                    <link rel="icon" type="image/png" href={favicon}/>
                </Helmet>
                <Navbar 
                navCollapsed = {this.state.navCollapsed} toggleCollapse = {this._onToggleNav}
                />
                <Home 
                handleName={this._handleName}
                handleEmail={this._handleEmail}
                handlePhone={this._handlePhone}
                handleCompany={this._handleCompany}
                onSubmit={this._onSubmit}

                />
                <div id="spacer1">
                </div>
                <div id="spacer2" className="text-center bg-black">
                    Meet Our Team
                </div>
                <Header 
                divCollapse={this._toggleCollapse}
                />
            </div>
        )
    }
}

module.exports = App