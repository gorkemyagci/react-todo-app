import axios from 'axios';
import React, { Component } from 'react';
import TodoConsumer from './TodoContext';
import Todos from './Todos';
var uniqid = require('uniqid');
import Todo from './Todo';


class AddTodo extends Component {

    state = {
        todo:''
    }

    changeInput = (e) => {
        this.setState({
            [e.target.name] : [e.target.value]
        })
    }

    AddTodo = (dispatch,e) => {
        e.preventDefault();
        const {todo} = this.state;
        const newTodo = {
            id:uniqid(),
            todo:todo,
        }
        dispatch({type:"ADD_TODO",payload:newTodo});
        document.getElementById('todo').value = "";
        axios.post('http://localhost:3004/todos',newTodo)
        .then(response => {
            if(response.status === 200 || response.status === 201){
              alert("Card successfully added");
            }else{
                alert("Card not added")
            }
        })
    }

    
  render() {
      const {todo} = this.props;
    return (
        <TodoConsumer>
            {
                value => {
                    const {dispatch} = value;
                    return(
                        <div className='form'>
                        <form className='form container p-3' onSubmit={this.AddTodo.bind(this,dispatch)}>
                            <div className='form-group w-100'>
                                <label htmlFor="todo">
                                    Add:
                                </label>
                                <input
                                type="text"
                                placeholder='To Do'
                                name='todo'
                                id="todo"
                                value={todo}
                                className='form-control w-50 mt-2'
                                onChange={this.changeInput}
                                />
                            </div>
                            <div>
                            <button id='edit' onClick={Todo.prototype.updateTodo} className='btn btn-success d-none mt-2'>Edit</button>
                            <button id='submit' type='submit' className='btn btn-primary mt-2 mr-3'>Add</button>
                            <button id='close' className='btn btn-danger d-inline mt-2 ml-3 d-none' style={{marginLeft:"10px"}}>Close</button>
                            </div>
                        </form>
                      </div>
                    )
                }
            }
        </TodoConsumer>
    )
  }
}

export default AddTodo;