import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component{
    state = {
        persons:[
            {name:'Max' ,age: 28},
            {name:'Peter' ,age: 24},
            {name:'Sarah' ,age: 25}
        ]
    }

    render() {
        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <button>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>Whats upp</Person>
            </div>
        );
    }
}

export default App;
