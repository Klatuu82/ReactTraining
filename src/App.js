import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'


class App extends Component{
    state = {
        persons:[
            {id: 'yfhdf', name:'Max' ,age: 28},
            {id: 'hddh', name:'Peter' ,age: 24},
            {id: 'hcth', name:'Sarah' ,age: 25}
        ],
        showPersons: false,
    };

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;
        const persons  = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons});
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
                            ages={person.age}
                            id={person.id}
                            changed={(event) => this.nameChangedHandler(event, person.id)}
                        />
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
