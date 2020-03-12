import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'


class App extends Component{
    state = {
        persons:[
            {name:'Max' ,age: 28},
            {name:'Peter' ,age: 24},
            {name:'Sarah' ,age: 25}
        ],
        showPersons: false,
    };

    deletePersonHandler = (personIndex) => {
        // makes a copy of the array
        // const persons = this.state.persons.slice();
        // makes a list of this array, and put the list in a new array
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
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
                    {this.state.persons.map((person, index) => {
                        return <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}/>
                    })}
                </div>
            );
        }
        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <button onClick={this.togglePersonHandler} >Toggle Persons</button>

                {persons}

            </div>
        );
    }
}

export default App;
