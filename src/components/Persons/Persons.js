import React, { PureComponent } from 'react';

import Person from './Person/Person';

class Persons extends PureComponent {

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