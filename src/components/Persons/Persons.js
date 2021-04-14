import React, { Component } from 'react';

import Person from './Person/Person';

class Persons extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate');
        if(nextProps.persons !== this.props.persons) {
            return true;
        } else {
            return false;
        }
    }

    render() { 
        console.log('[Persons.js] rendering...');
        return (this.props.persons.map((person, index) => {
            return <Person
                deletePerson = {() => this.props.clicked(index)} 
                change = {(event) => this.props.changed(event, person.id)}
                name={person.name}
                age={person.age}
                key={person.id} />
            })
        )
    }
 

}
export default Persons;