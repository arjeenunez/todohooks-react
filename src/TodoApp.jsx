import React, { useState, useEffect } from 'react';
import { Typography, Grid, Paper, AppBar, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import SampleTodos from './SampleTodos';
import { v4 as uuid } from 'uuid';
import Todolist from './TodoList';
import TodoForm from './TodoForm';

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
    const [todos, setTodos] = useState(SampleTodos);
    return (
        <PaperStyled elevation={0}>
            <AppBarStyled color="primary" position="static">
                <Toolbar>
                    <Typography color="inherit">TODOS WITH HOOKS</Typography>
                </Toolbar>
            </AppBarStyled>
            <GridStyled container justifyContent="center">
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm />
                    <Todolist todos={todos} />
                </Grid>
            </GridStyled>
        </PaperStyled>
    );
}

export default TodoApp;
