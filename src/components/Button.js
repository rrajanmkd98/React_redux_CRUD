import React from 'react'

class Button extends React.Component {
    render() {
        return(
            <button 
                type={this.props.type} 
                onClick={this.props.onClick}>
                {this.props.name}
            </button>
        )
    }
}

export default Button;