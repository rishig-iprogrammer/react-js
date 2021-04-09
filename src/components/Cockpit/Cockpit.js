import React from 'react';

import classes from './Cockpit.css';

const cockpit = props => { 
    let btnClasses = [];
    if(props.showPersons) {
        btnClasses.push(classes.Red);
    }
    return(
        <div className={classes.Cockpit}>
            <h1>{ props.title }</h1>
            <button 
            className={btnClasses.join(' ')}
            onClick={props.clicked}>
            Toggle Persons
            </button>
        </div>
    );
}

export default cockpit;