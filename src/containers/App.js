import React, { Component } from 'react';
import classes from './App.css';


import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

class App extends Component {
  state = {
    persons : [
      { id : 1, name : 'Max', age : 28},
      { id : 2, name : 'Manu', age : 29},
      { id : 3, name : 'Karen', age : 26}
    ],
    showPersons : false,
    showCockpit : true
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
    this.setState((prevState, props) => {
      return { showPersons : !prevState.showPersons }
    });
  }

  toggleCockpit = () => {
    this.setState((prevState, props) => {
      return { showCockpit : !prevState.showCockpit }
    });
  }


  render() {
    let persons = null;
    

    if(this.state.showPersons) {
      persons = <Persons 
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.changeNameHandler} />
    }

    return (
      <Aux>
        <button
        onClick={this.toggleCockpit}>Toggle Cockpit</button>
        {this.state.showCockpit ? <Cockpit
          title = {this.props.title}
          showPersons = {this.state.showPersons} 
          clicked = {this.togglePersons} /> : null}
        {persons}
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
