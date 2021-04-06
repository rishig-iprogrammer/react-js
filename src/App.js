import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      { name : 'Max', age : 28},
      { name : 'Manu', age : 29},
      { name : 'Karen', age : 26}
    ],
    showPersons : false
  }

  switchNameHandler = () => {
    this.setState({
      persons : [
        { id : 'a1', name : 'Roger', age : 28},
        { id : 'a2', name : 'Manu', age : 29},
        { id : 'a3', name : 'Karen', age : 20}
      ]
    })
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
            name={person.name}
            age={person.age}
            keys={person.id} />
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
