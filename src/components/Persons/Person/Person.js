import React, { Component } from 'react';

import classes from './Person.css';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        this.inputElementRef.current.focus();
    }

    render() {
        console.log('[Person.js] rendering');
        return (
            <Aux>
                <h1>{this.props.keys}</h1>
                <AuthContext.Consumer>
                    {(context) => context.authenticated ? <p>Authenticated</p> : <p>Please log in</p>}
                </AuthContext.Consumer>
                <p onClick={this.props.deletePerson}>I'm {this.props.name}. I'm {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.change} value={this.props.name} ref={this.inputElementRef} />
            </Aux>
        )
    }
    
}

Person.propTypes = {
    deletePerson : PropTypes.func,
    age : PropTypes.number,
    name : PropTypes.string,
    change : PropTypes.func
}

export default withClass(Person, classes.Person);