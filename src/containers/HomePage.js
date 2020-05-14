import React, { Component } from 'react';
import NavBar from '../components/NavBar'
import {Link, Route, Switch, BrowserRouter as Router} from "react-router-dom";

class HomePage extends Component {
    constructor() {
        super();
        this.state = {
          id: null
        }
    }

    handleChange = (event) => {
        event.preventDefault()
        return this.setState({id: event.target.value})
    };
        
    render() {
        return (
            <div>
                <NavBar/>
                <div className="container">
                    <Link to="/input" ><button>Create a new recipe</button></Link>
                    <input type="text" placeholder="Recipe ID" value={this.state.id} onChange={this.handleChange} />
                    <Link to={`/recipe/${this.state.id}`} ><button>View recipe {this.state.id}</button></Link>
                </div>
            </div>
        );
    }
}

export default HomePage;