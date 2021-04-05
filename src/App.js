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
  render() {
    return (
      <div className="App">
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Hobbies : Dancing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
