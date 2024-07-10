import React from 'react';
import { Paper, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import useInputState from './hooks/useInputState';

const PaperStyled = styled(Paper)`
    margin: 1rem 0;
    padding: 0 1rem;
`;

function TodoForm({ addTodos }) {
    const [value, handleChange, reset] = useInputState('');
    const handleAddTodos = evt => {
        evt.preventDefault();
        addTodos(value);
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
