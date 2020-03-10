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
        ],
        showPersons: false,
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

    userNameChangedHandler = (event) => {
        this.setState({
            userName : event.target.value
        })
    };

    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow})
    };

    render() {

        let persons = null;
        if(this.state.showPersons){
            persons = (
                <div>
                    <Person
                        name={this.state.persons[0].name}
                        age={this.state.persons[0].age}
                        click={this.switchNameHandler.bind(this, 'NeuerName')}/>
                    <Person
                        name={this.state.persons[1].name}
                        age={this.state.persons[1].age}
                        click={this.switchNameHandler.bind(this, 'NeuerName')}/>
                    <Person
                        name={this.state.persons[2].name}
                        age={this.state.persons[2].age}
                        click={this.switchNameHandler.bind(this, 'NeuerName')}/>
                </div>
            );
        }
        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <button onClick={() => this.switchNameHandler('noch ein neuer Name')}>Switch Name</button>
                <button onClick={this.togglePersonHandler} >Toggle Persons</button>

                {persons}

                <UserOutput userName={this.state.userName} />
                <UserInput
                    name={this.state.userName}
                    changed={this.userNameChangedHandler}/>

            </div>
        );
    }
}

export default App;
