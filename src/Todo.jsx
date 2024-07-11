import React, { useContext, memo } from 'react';
import { ListItem, ListItemText, Checkbox, ListItemSecondaryAction, IconButton } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import useToggle from './hooks/useToggle';
import EditTodoForm from './EditTodoForm';
import { DispatchContext } from './contexts/todos.context';

const ListItemStyled = styled(ListItem)`
    height: 64px;
`;

const ListItemTextStyled = styled(ListItemText, { shouldForwardProp: props => props !== 'done' })(
    ({ done }) => `
    text-decoration: ${done ? 'line-through' : 'none'};
    font-style: ${done ? 'italic' : 'none'};
`
);

function Todo({ id, task, completed }) {
    const dispatch = useContext(DispatchContext);
    const handleRemoveTodo = () => dispatch({ type: 'REMOVE', id: id });
    const handleToggleTodo = () => dispatch({ type: 'TOGGLE', id: id });
    const [isEditing, toggle] = useToggle(false);
    return (
        <ListItemStyled>
            {isEditing ? (
                <EditTodoForm task={task} id={id} toggle={toggle} />
            ) : (
                <>
                    <Checkbox color="error" tabIndex={-1} checked={completed} onClick={handleToggleTodo} />
                    <ListItemTextStyled done={completed}>{task}</ListItemTextStyled>
                    <ListItemSecondaryAction>
                        <IconButton aria-label="delete" onClick={handleRemoveTodo}>
                            <Delete />
                        </IconButton>
                        <IconButton aria-label="edit" onClick={toggle}>
                            <Edit />
                        </IconButton>
                    </ListItemSecondaryAction>
                </>
            )}
        </ListItemStyled>
    );
}

export default memo(Todo);
