import React from 'react'

const NavBar = props => {
    console.log(props)
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
            <div className="container">
                <button className="navbar-toggler" onClick={props.toggleCollapse}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a href="index.html" className="navbar-brand">rlephant</a>
            </div>
            <div className={(props.navCollapsed ? 'collapse' : '') + ' navbar-collapse'}>
                <ul className="navbar-nav ml-auto">
                    <li className="navbar-nav ml-auto">
                        <a href="#home" className="nav-link">{props.navCollapsed}</a>    
                    </li>
                    <li className="navbar-nav ml-auto">
                        <a href="#about" className="nav-link">
                            ABOUT
                        </a>
                    </li>
                    <li className="navbar-nav ml-auto">
                        <a href="#contact" className="nav-link">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

module.exports = NavBar