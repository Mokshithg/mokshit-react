import React, { Component } from 'react'

export default class mokshg extends Component {
    constructor(props) {
        super(props);
        this.state = {items: [],text: " "};
        this.handlechange = this.handlechange.bind(this);
        this.handlesubmit = this.handlesubmit.bind(this);
    }
    handlechange(e){
        this.setState({text : e.target.value});
    }
  render() {
    return (
      <div>
        <h1>Mokshith</h1>
        <TodoList items = {this.state.items} />
        <form onSubmit={this.handlesubmit}/>
        <label htmlFor='new-todo'>
            Tasks to be added..!
        </label>
        <input id='new-todo' onChange={this.handlechange} value={this.state.text}/>
        <button>
            Add-Task{this.state.items.length + 1}
        </button>
      </div>
    )
  }
}

export default mokshg;