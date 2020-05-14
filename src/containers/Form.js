import React, { Component } from 'react';
import NavBar from '../components/NavBar'

class Recipe extends Component {
    constructor() {
        super();
        this.state = {
          Title: '',
          Ingredients: '',
          Method: '',
          Dificulty: null
        }
    }

    handleChange = (event) => {
        event.preventDefault()
        return this.setState({[event.target.id]: event.target.value})
    }
    
    render() {
        console.log(this.state)
        return (
            <div>
                <NavBar/>
                <div className="container">
                    <div className="inputs">
                        <input type="text" placeholder="Title" value={this.state.value} id='Title' onChange={this.handleChange} />
                        <input type="text" placeholder="Ingredients" value={this.state.value} id='Title' onChange={this.handleChange} />
                        <input type="text" placeholder="Method" value={this.state.Method} id='Title' onChange={this.handleChange} />
                        <input type="text" placeholder="Dificulty" value={this.state.Dificulty} id='Dificulty' onChange={this.handleChange} />
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Recipe;