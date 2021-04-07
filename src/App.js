import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      { id : 1, name : 'Max', age : 28},
      { id : 2, name : 'Manu', age : 29},
      { id : 3, name : 'Karen', age : 26}
    ],
    showPersons : false
  }

  changeNameHandler = (event, id) => {
    //get the index of the person from the array
    const personIndex = this.state.persons.findIndex(currentPerson => {
      return currentPerson.id === id
    })

    //assign the element to a new variable
    const person = {
      ...this.state.persons[personIndex]
    }

    //update the name of the person in the new variable
    person.name = event.target.value

    //assign the global persons array to new array
    const persons = [...this.state.persons]

    //update the person element in the new array
    persons[personIndex] = person;

    //update the global array with the new persons array
    this.setState({persons : persons})
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons : persons});
  }


  togglePersons = () => {
    this.setState({showPersons : !this.state.showPersons})
  }


  render() {
    const buttonStyle = {
      padding : '10px 15px',
      border : '2px solid cyan',
      backgroundColor : 'teal',
      color : '#fff',
      cursor : 'pointer',
      borderRadius : '5px'
    }

    let persons = null;

    if(this.state.showPersons) {
      persons = this.state.persons.map((person, index) => {
        return <Person
            deletePerson = {() => this.deletePersonHandler(index)} 
            change = {(event) => this.changeNameHandler(event, person.id)}
            name={person.name}
            age={person.age}
            key={person.id} />
      })
    }

    return (
      <div className="App">

        <button 
        style={buttonStyle}
        onClick={this.togglePersons}>
          Toggle Persons
        </button>

        {persons}
      </div>
    );
  }
}

export default App;
