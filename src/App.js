import React, { Component } from 'react'
import './App.css'
import  CheckBox  from './CheckBox'

class App extends Component {
  state = {
      fruites: [
        {id: 1, value: "banana", isChecked: false},
        {id: 2, value: "apple", isChecked: false},
        {id: 3, value: "mango", isChecked: false},
        {id: 4, value: "grape", isChecked: false}
      ],
      isCheckedAll: false
  }
  
  handleAllChecked = (event) => {
    let fruites = this.state.fruites
    fruites.forEach(fruite => {
      return fruite.isChecked = event.target.checked
    }) 
    this.setState(prevState => ({
        fruites: fruites, isCheckedAll: !prevState.isCheckedAll
    }))
  }

  handleCheckChieldElement = (event) => {
    let fruites = this.state.fruites
    fruites.forEach(fruite => {
       if (fruite.value === event.target.value) {
          fruite.isChecked = event.target.checked
       }
    })
    if (this.state.isCheckedAll === true) {
      this.setState({fruites: fruites, isCheckedAll: false})
    } else {
      this.setState({fruites: fruites, isCheckedAll: false})
    }
  }

  render() {
    return (
      <div className="App">
      <h1> Check and Uncheck All Example </h1>
      <ul>
      <input type="checkbox" onClick={this.handleAllChecked}  value="checkedall" checked={this.state.isCheckedAll}/> All
        {
          this.state.fruites.map((fruite) => {
            return (<CheckBox key={fruite.id} handleCheckChieldElement={this.handleCheckChieldElement} {...fruite} />)
          })
        }
        </ul>
      </div>
    );
  }
}

export default App