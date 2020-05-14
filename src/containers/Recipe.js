import React, { Component } from 'react';
import NavBar from '../components/NavBar';

class Recipe extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: {},
            id: this.props.match.params.id
        }
    }

    getData() {
        fetch(`http://localhost:8000/api/${this.state.id}`)
        .then(response => response.json())
        .then(data => {return this.setState({data: data})})
        .catch(error => console.log(error))
    };

    componentDidMount(){
        this.getData()
    }

    render() {
        console.log(this.state)
        if (this.state.data === null){
            return (
                <div>
                    <h3>
                        Loading Data...
                    </h3>
                </div>
            )
        }
        return (
        <div>
            <NavBar/>
            <div className="container">
                <h3>{this.state.data.Title}</h3>
                <p>{this.state.data.Ingredients}</p>
                <p>{this.state.data.Method}</p>
            </div>
            
        </div>
        );
    }
}

export default Recipe;