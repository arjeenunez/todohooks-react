import React from 'react';
import { TextField } from '@mui/material';
import useInputState from './hooks/useInputState';
import { styled } from '@mui/material/styles';

const FormStyled = styled('form')`
    margin-left: 1rem;
    width: 50%;
`;

function EditTodoForm({ task, id, editTodo, toggle }) {
    const [value, handleChange, reset] = useInputState(task);
    const handleEditTodo = evt => {
        evt.preventDefault();
        editTodo(id, value);
        reset();
        toggle();
    };
    return (
        <FormStyled onSubmit={handleEditTodo}>
            <TextField variant="standard" onChange={handleChange} value={value} margin="normal" fullWidth autoFocus />
        </FormStyled>
    );
}

export default EditTodoForm;
