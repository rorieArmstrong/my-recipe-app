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
        return this.setState({[event.target.name]: event.target.value})
    }

    post = () => {

    }
    
    render() {
        console.log(this.state)
        return (
            <div>
                <NavBar/>
                <div className="container">
                    <form className="inputs" action="http://localhost:8000/api/activity" method="POST">
                        <input type="text" placeholder="Title" value={this.state.value} name='Title' onChange={this.handleChange} />
                        <input type="text" placeholder="Ingredients" value={this.state.value} name='Title' onChange={this.handleChange} />
                        <input type="text" placeholder="Method" value={this.state.Method} name='Title' onChange={this.handleChange} />
                        <input type="text" placeholder="Dificulty" value={this.state.Dificulty} name='Dificulty' onChange={this.handleChange} />
                        <button type="submit">Submit</button>
                    </form>
                </div>
                
            </div>
        );
    }
}

export default Recipe;