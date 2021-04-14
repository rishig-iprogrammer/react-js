import React, { useEffect } from 'react';

import classes from './Cockpit.css';

const cockpit = props => { 
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        setTimeout(() => {
            alert('Persons updated');
        }, 1000);

        return (()=> {
            console.log('[Cockpit.js] cleanup work in useEffect');
        });
    }, []); 
    // executes only when the second parameter value changes
    // if second parameter is empty array `[]` then function runs only once


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

export default React.memo(cockpit);