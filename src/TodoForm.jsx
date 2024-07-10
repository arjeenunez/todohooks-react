import React from 'react';
import { Paper, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import useInputState from './hooks/useInputState';

const PaperStyled = styled(Paper)`
    margin: 1rem 0;
    padding: 0 1rem;
`;

function TodoForm() {
    const [value, handleChange, reset] = useInputState('');
    return (
        <PaperStyled>
            <form action=""></form>
            <TextField variant="standard" value={value} onChange={handleChange} margin="normal" label="Add a todo" fullWidth />
        </PaperStyled>
    );
}

export default TodoForm;
