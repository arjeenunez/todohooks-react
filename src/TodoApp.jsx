import React, { useState, useEffect } from 'react';
import { Typography, Grid, Paper, AppBar, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import sampleTodos from './SampleTodos';
import { v4 as uuid } from 'uuid';
import Todolist from './TodoList';
import TodoForm from './TodoForm';
import useToggle from './hooks/useToggle';

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
    // let initialTodos = [];
    const [todos, setTodos] = useState(sampleTodos);
    const addTodos = task => setTodos([...todos, { id: uuid(), task: task, completeq: false }]);
    const removeTodos = id => setTodos([...todos].filter(todo => todo.id !== id));
    const toggleTodo = id => {
        setTodos(todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
    };
    const editTodo = (id, newTask) => {
        setTodos(todos.map(todo => (todo.id === id ? { ...todo, task: newTask } : todo)));
    };
    // useEffect(() => {
    //     const localStored = JSON.parse(localStorage.getItem('todos'));
    //     if (!localStored) {
    //         initialTodos.push(sampleTodos);
    //         return saveLocal();
    //     }
    //     initialTodos = localStored;
    // }, []);

    // const saveLocal = () => {
    //     localStorage.clear();
    //     localStorage.setItems('todos', JSON.stringify(todos));
    // };

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
