import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      { name : 'Max', age : 28},
      { name : 'Manu', age : 29},
      { name : 'Karen', age : 26}
    ]
  }

  switchNameHandler = () => {
    this.setState({
      persons : [
        { name : 'Roger', age : 28},
        { name : 'Manu', age : 29},
        { name : 'Karen', age : 20}
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons : [
        { name : 'Max', age : 28},
        { name : event.target.value, age : 29},
        { name : 'Karen', age : 26}
      ]
    })
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

    return (
      <div className="App">

        <button 
        style={buttonStyle}
        onClick={this.switchNameHandler}>
          Switch Name
        </button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}
        inputChange = {this.nameChangeHandler} />

        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        inputChange = {this.nameChangeHandler} >
          Hobbies : Dancing
        </Person>

        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}
        inputChange = {this.nameChangeHandler} />
      </div>
    );
  }
}

export default App;
