import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import UserOutput from './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput'


class App extends Component{
    state = {
        userName : 'Klatuu',
        persons:[
            {name:'Max' ,age: 28},
            {name:'Peter' ,age: 24},
            {name:'Sarah' ,age: 25}
        ]
    };

    switchNameHandler = (newName) => {
        this.setState( {
            persons:[
                {name:newName ,age: 28},
                {name:'Peter' ,age: 24},
                {name:'Sarah' ,age: 25}
            ]
        })
    };

    switchUserNameHandler = (event) => {
        this.setState({
            userName : event.target.value
        })
    };

    render() {
        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <button onClick={() => this.switchNameHandler('noch ein neuer Name')}>Switch Name</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                    click={this.switchNameHandler.bind(this, 'NeuerName')}/>
                <UserOutput userName={this.state.userName} />
                <UserInput name={this.state.userName} changed={this.switchUserNameHandler}/>

            </div>
        );
    }
}

export default App;
