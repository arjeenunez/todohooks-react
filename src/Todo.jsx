import React from 'react';
import { ListItem, ListItemText, Checkbox, ListItemSecondaryAction, IconButton } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const ListItemTextStyled = styled(ListItemText, { shouldForwardProp: props => props !== 'done' })(
    ({ done }) => `
    text-decoration: ${done ? 'line-through' : 'none'};
`
);

function Todo({ id, task, completed }) {
    return (
        <ListItem>
            <Checkbox tabIndex={-1} checked={completed} />
            <ListItemTextStyled done={completed}>{task}</ListItemTextStyled>
            <ListItemSecondaryAction>
                <IconButton aria-label="delete">
                    <Delete />
                </IconButton>
                <IconButton aria-label="edit">
                    <Edit />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
}

export default Todo;
