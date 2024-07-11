import React, { useContext } from 'react';
import { Paper, List, Divider } from '@mui/material';
import Todo from './Todo';
import { TodosContext } from './contexts/todos.context';

function TodoList() {
    const { todos } = useContext(TodosContext);
    return (
        <Paper>
            <List>
                {todos.map((todo, idx, arr) => (
                    <React.Fragment key={todo.id}>
                        <Todo task={todo.task} id={todo.id} completed={todo.completed} />
                        {idx < arr.length - 1 && <Divider />}
                    </React.Fragment>
                ))}
            </List>
        </Paper>
    );
}

export default TodoList;
