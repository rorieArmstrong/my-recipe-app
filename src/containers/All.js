import React, { Component } from 'react';
import NavBar from '../components/NavBar';

class All extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }

    getData = () => {
        fetch(`http://localhost:8000/api/all`)
        .then(response => response.json())
        .then(data => {return this.setState({data: data})})
        .catch(error => console.log(error))
    };

    showAll = () => {
        let list = []
        for(let i=0; i<this.state.data.length; i++){
            list.push(<div>
                <h3>{this.state.data[i].Title}</h3>
                <p>Ingredients: <br/>{this.state.data[i].Ingredients}</p>
                <p>Method: <br/>{this.state.data[i].Method}</p>
            </div>);
        }
        return list;
    }

    componentDidMount(){
        this.getData()
    }

    render() {
        console.log(this.state)
        if (this.state.data === []){
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
                {this.showAll()}
            </div>
            
        </div>
        );
    }
}

export default All;