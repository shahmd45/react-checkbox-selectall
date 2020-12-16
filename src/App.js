import React, { Component } from 'react'
import './App.css'
import  CheckBox  from './CheckBox'

class App extends Component {
  state = {
      fruites: [
        {id: 1, value: "Banana", isChecked: false},
        {id: 2, value: "Apple", isChecked: false},
        {id: 3, value: "Mango", isChecked: false},
        {id: 4, value: "Grape", isChecked: false},
        {id: 5, value: "Carrot", isChecked: false},
        {id: 6, value: "Water Melon", isChecked: false}
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

  onCheckHandler = () => {
  }

  render() {
    return (
      <div className="App">
      <h1> Check and Uncheck All Example </h1>
      <ul>
        <input
            type="checkbox" 
            onClick={this.handleAllChecked}
            onChange={this.onCheckHandler}
            value="checkedall"
            checked={this.state.isCheckedAll}
        /> <span>All</span>
        {
          this.state.fruites.map((fruite) => {
            return (
            <CheckBox 
              key={fruite.id}
              handleCheckChieldElement={this.handleCheckChieldElement}
              onCheckHandler={this.onCheckHandler}
              {...fruite} 
              />
            )
          })
        }
        </ul>
        <h2> Selected Fruites in the basket </h2>
        <div className="selected__Items">
          {this.state.fruites.map(item => {
            return (
              <p key={item.id}>{item.isChecked && item.value}</p>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App