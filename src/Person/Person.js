import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <h1>{props.keys}</h1>
            <p onClick={props.deletePerson}>I'm {props.name}. I'm {props.age} years old!</p>
            <p>{props.children}</p>
            
        </div>
    )
};

export default person;