import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link, Redirect } from 'react-router-dom'

class Header extends Component{

    render(){
        return(
            <header id={'header'} className="non-home">
                <div className='container main-menu'>
                    <div className='row align-items-center justify-content-between d-flex'>
                        <nav id='nav-menu-container'>
                            <ul className='nav-menu'>
                                <li className="menu-active"><Link to="/">Home</Link></li>
                                <li className="menu-active"><Link to="/login">Login</Link> </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}
export default Header