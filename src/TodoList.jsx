import React from 'react';
import { Paper, List, Divider } from '@mui/material';
import Todo from './Todo';

function TodoList({ todos, removeTodos, toggleTodo, editTodo }) {
    return (
        <Paper>
            <List>
                {todos.map(todo => (
                    <React.Fragment key={todo.id}>
                        <Todo task={todo.task} id={todo.id} completed={todo.completed} removeTodos={removeTodos} toggleTodo={toggleTodo} editTodo={editTodo} />
                        <Divider />
                    </React.Fragment>
                ))}
            </List>
        </Paper>
    );
}

export default TodoList;
