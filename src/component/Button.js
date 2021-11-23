import React from 'react';

function sayHello() {
    console.log("hello");
}

class Button extends React.Component {
        render() {
            return (<button onClick = {sayHello} > {this.props.label} </button> );
            }
        }

export default Button;
