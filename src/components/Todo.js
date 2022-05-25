import React, { Component } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import TodoConsumer from './TodoContext';

class Todo extends Component {
    deleteTodo = (dispatch) => {
        const {id} = this.props;
        // Consumer
        dispatch({type:"DELETE_TODO",payload:id});
    }
  render() {
      const {todo} = this.props;
    return (
        <TodoConsumer>
            {
                value => {
                    const {dispatch} = value;
                    return(
                        <div className='card my-3'>
                        <div className='card-header d-flex justify-content-between align-items-center'>
                            <p>{todo}</p>
                            <BsFillTrashFill size={24} style={{cursor:"pointer"}} onClick={this.deleteTodo.bind(this,dispatch)}/>
                        </div>
                    </div>
                    )
                }
            }
        </TodoConsumer>
    )
  }
}

export default Todo;