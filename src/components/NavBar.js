import React, { Component } from 'react'
import {Link, BrowserRouter as Router} from "react-router-dom";
import '../css/NavBar.css'

class NavBar extends Component {
    render() {
        return (
            <div className="navbar">
                <Router>
                    <Link to="/" className="styledLink">Home</Link>
                </Router>
            </div>
        )
    }
}

export default NavBar