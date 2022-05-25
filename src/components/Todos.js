import React, { Component } from 'react';
import TodoConsumer from './TodoContext';
import Todo from './Todo';

class Todos extends Component {
  render() {
    return (
     <TodoConsumer>
        {
            value => {
                        const {todos} = value;
                        return(
                            <div>
                                {
                                    todos.map(item => {
                                        return(
                                            <Todo
                                            id = {item.id}
                                            todo = {item.todo}
                                            />
                                        )
                                    })
                                }
                            </div>
                        )
            }
        }
     </TodoConsumer>
    )
  }
}

export default Todos;