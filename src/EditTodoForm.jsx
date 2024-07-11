import React, { useContext } from 'react';
import { TextField } from '@mui/material';
import useInputState from './hooks/useInputState';
import { styled } from '@mui/material/styles';
import { DispatchContext } from './contexts/todos.context';

const FormStyled = styled('form')`
    margin-left: 1rem;
    width: 50%;
`;

function EditTodoForm({ task, id, toggle }) {
    const dispatch = useContext(DispatchContext);
    const [value, handleChange, reset] = useInputState(task);
    const handleEditTodo = evt => {
        evt.preventDefault();
        dispatch({ type: 'EDIT', task: value, id: id });
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
