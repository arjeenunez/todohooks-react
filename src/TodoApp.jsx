import React, { useEffect } from 'react';
import { Typography, Grid, Paper, AppBar, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import sampleTodos from './SampleTodos';
import Todolist from './TodoList';
import TodoForm from './TodoForm';
import useTodoHooks from './hooks/useTodoHooks';

const PaperStyled = styled(Paper)`
    padding: 0;
    margin: 0;
    height: 100vh;
    background-color: #fafafa;
`;

const AppBarStyled = styled(AppBar)`
    height: 64px;
`;

const GridStyled = styled(Grid)`
    margin-top: 1rem;
`;

function TodoApp() {
    const calledTodos = JSON.parse(window.localStorage.getItem('todos')) || sampleTodos;
    const { todos, addTodos, removeTodos, toggleTodo, editTodo } = useTodoHooks(calledTodos);
    useEffect(() => {
        window.localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    return (
        <PaperStyled elevation={0}>
            <AppBarStyled color="error" position="static">
                <Toolbar>
                    <Typography color="inherit">TODOS WITH HOOKS</Typography>
                </Toolbar>
            </AppBarStyled>
            <GridStyled container justifyContent="center">
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm addTodos={addTodos} />
                    <Todolist todos={todos} removeTodos={removeTodos} toggleTodo={toggleTodo} editTodo={editTodo} />
                </Grid>
            </GridStyled>
        </PaperStyled>
    );
}

export default TodoApp;
