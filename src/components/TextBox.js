import React from 'react'

class TextBox extends React.Component {
    render() {
        return(
            <input 
                id={this.props.id}
                value={this.props.value}
                placeholder={this.props.placeholder}
                type={this.props.type} 
                onChange={this.props.onChange}/>
        )
    }
}

export default TextBox;