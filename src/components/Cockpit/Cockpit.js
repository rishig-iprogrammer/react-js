import React, { useEffect, useRef } from 'react';

import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = props => { 
    const toggleBtnRef = useRef(null);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        
        toggleBtnRef.current.click();

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
            ref={toggleBtnRef}
            className={btnClasses.join(' ')}
            onClick={props.clicked}>
            Toggle Persons
            </button> <br /> <br/>
            <AuthContext.Consumer>
                {context => <button onClick={context.login}>Login</button>}
            </AuthContext.Consumer>
        </div>
    );
}

export default React.memo(cockpit);