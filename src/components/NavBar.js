import React, { Component } from 'react'
import {Link} from "react-router-dom";
import '../css/NavBar.css'

class NavBar extends Component {
    render() {
        return (
            <div className="navbar">
                <Link to="/" className="styledLink">Home</Link>
            </div>
        )
    }
}

export default NavBar