import React, { Component } from 'react';
import TodoConsumer from './TodoContext';
var uniqid = require('uniqid');


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
            todo:todo
        }
        dispatch({type:"ADD_TODO",payload:newTodo});
        document.getElementById('todo').value = "";
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
                            <button type='submit' className='btn btn-primary mt-2'>Add</button>
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