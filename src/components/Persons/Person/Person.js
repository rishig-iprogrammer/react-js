import React, { Component } from 'react';
import classes from './Person.css';

class Person extends Component {
    render() {
        console.log('[Person.js] rendering');
        return (
            <div className={classes.Person}>
                <h1>{this.props.keys}</h1>
                <p onClick={this.props.deletePerson}>I'm {this.props.name}. I'm {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.change} value={this.props.name} />
            </div>
        )
    }
    
}

export default Person;