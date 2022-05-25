import axios from 'axios';
import React, { Component } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import TodoConsumer from './TodoContext';
import { FiEdit } from 'react-icons/fi';


class Todo extends Component {

    deleteTodo = (dispatch) => {
        const {id} = this.props;
        // Consumer
        dispatch({type:"DELETE_TODO",payload:id});
        axios.delete('http://localhost:3004/todos/'+id)
        .then(response => {
            if(response.status === 200){
                alert("Card successfully deleted");
            }else{
                alert("Card not deleted");
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
                        <div className="card my-3" id="TodoItem">
                        <div id='header' className='card-header d-flex justify-content-between align-items-center'>
                            <div>
                            <p>{todo}</p>
                            </div>
                            <div>
                            <FiEdit size={24} onClick={this.editTodo} className="editIcon"/>
                            <BsFillTrashFill size={24} style={{cursor:"pointer"}} onClick={this.deleteTodo.bind(this,dispatch)}/>
                            </div>
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