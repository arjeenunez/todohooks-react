import React from 'react';
import { TextField } from '@mui/material';
import useInputState from './hooks/useInputState';

function EditTodoForm({ task, id, editTodo, toggle }) {
    const [value, handleChange, reset] = useInputState(task);
    const handleEditTodo = evt => {
        evt.preventDefault();
        editTodo(id, value);
        reset();
        toggle();
    };
    return (
        <form onSubmit={handleEditTodo}>
            <TextField variant="standard" onChange={handleChange} value={value} margin="normal" fullWidth />
        </form>
    );
}

export default EditTodoForm;
