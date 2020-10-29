import React from 'react';

class Label extends React.Component {
    render() {
        return(
            <label for={this.props.name}>{this.props.label}</label> 
        )
    }
}

export default Label