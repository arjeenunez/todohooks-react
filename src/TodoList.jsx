import React from 'react';
import { Paper, List, Divider } from '@mui/material';
import Todo from './Todo';

function TodoList({ todos }) {
    return (
        <Paper>
            <List>
                {todos.map(todo => (
                    <React.Fragment key={todo.id}>
                        <Todo task={todo.task} id={todo.id} completed={todo.completed} />
                        <Divider />
                    </React.Fragment>
                ))}
            </List>
        </Paper>
    );
}

export default TodoList;
