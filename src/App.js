import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Validation from './Validation/Validation';
import Char from './Char/Char';


class App extends Component{
    state = {
        persons:[
            {id: 'yfhdf', name:'Max' ,age: 28},
            {id: 'hddh', name:'Peter' ,age: 24},
            {id: 'hcth', name:'Sarah' ,age: 25}
        ],
        showPersons: false,
        word: '',
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

    inputChangedHandler = (event) => {
        this.setState({
            word : event.target.value,
        })
    };

    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow})
    };

    deleteCharHandler = (index) => {
        const oldWord = this.state.word;

        let newWord = oldWord.slice(0, index) + oldWord.slice(index+1, oldWord.length);
        this.setState({
            word: newWord,
        });
        console.log(index);
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
        let length = null;
        if(this.state.word){
            length = (
                <div>
                    <p>{this.state.word.length}</p>
                </div>
            );
        }
        let chars = [];
        let charsDiv = null;
        if(this.state.word){
            let char;
            let i = -1;
            for(char of this.state.word){
                let index = ++i;
                chars[index] = (
                    <Char
                        inputChar={char}
                        click={() => this.deleteCharHandler(index)}
                    />
                );
            }
            charsDiv = (
                <div>
                    {chars}
                </div>
            );
        }

        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <button onClick={this.togglePersonHandler} >Toggle Persons</button>
                <input
                    type="text"
                    onChange={(event) => this.inputChangedHandler(event)}
                    value={this.state.word}
                />
                {length}
                <Validation length={this.state.word.length}/>
                {charsDiv}
                {persons}

            </div>
        );
    }
}

export default App;
