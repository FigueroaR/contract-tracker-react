import React from 'react'
import {NavLink} from 'react-router-dom'

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'lightblue',
    textDecoration: 'none',
    color: 'white',
  }

const NavBar = (props) => {
    return(
        <div className="navbar">
            <NavLink to="/" style={link}>Home</NavLink>
            <NavLink to="/contract/new" style={link}>New Contract</NavLink>
            
        </div>
    )
}

export default NavBar