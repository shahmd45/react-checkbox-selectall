import React, { Component } from 'react'

class Checkbox extends Component {
    render() {
        return (
            <li>
             <input 
                key={this.props.id} 
                onClick={this.props.handleCheckChieldElement} 
                type="checkbox" 
                checked={this.props.isChecked} 
                value={this.props.value} 
             /> 
             <label>
             {this.props.value}
             </label>
            </li>
        )
    }
}

export default Checkbox