import React, { Component } from 'react';
import axios from 'axios';

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

    componentDidMount = async () => {
       const response = await axios.get('http://localhost:3004/todos');
       if(response.status === 200){
           this.setState({
               todos: response.data
           })
       }else{
         document.getElementById('err').innerHTML = "KULLANICI BULUNAMADI..."
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