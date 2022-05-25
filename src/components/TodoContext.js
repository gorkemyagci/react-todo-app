import React, { Component } from 'react';

const TodoContext = React.createContext();

const reducer = (state,action) => {
    switch(action.type){
        case "DELETE_TODO":
            return{
                ...state,
                todos : state.todos.filter(todo => todo.id !== action.payload)
            }
        case "ADD_TODO":
            return{
                ...state,
                todos: [...state.todos,action.payload]
            }
    }
}

export class TodoProvider extends Component {
    state = {
        todos: [],
        dispatch : action => {
            this.setState(state => reducer(state,action));
        }
    }
  render() {
    return (
      <TodoContext.Provider value={this.state}>
          {this.props.children}
      </TodoContext.Provider>
    )
  }
}

const TodoConsumer = TodoContext.Consumer;

export default TodoConsumer;