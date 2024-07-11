import React, { useContext } from 'react';
import { Paper, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import useInputState from './hooks/useInputState';
import { TodosContext } from './contexts/todos.context';

const PaperStyled = styled(Paper)`
    margin: 1rem 0;
    padding: 0 1rem;
`;

function TodoForm() {
    const { dispatch } = useContext(TodosContext);
    const [value, handleChange, reset] = useInputState('');
    const handleAddTodos = evt => {
        evt.preventDefault();
        dispatch({ type: 'ADD', task: value });
        reset();
    };
    return (
        <PaperStyled>
            <form onSubmit={handleAddTodos}>
                <TextField variant="standard" value={value} onChange={handleChange} margin="normal" label="Add a todo" fullWidth />
            </form>
        </PaperStyled>
    );
}

export default TodoForm;
