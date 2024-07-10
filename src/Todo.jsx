import React from 'react';
import { ListItem, ListItemText, Checkbox, ListItemSecondaryAction, IconButton } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import useToggle from './hooks/useToggle';
import EditTodoForm from './EditTodoForm';

const ListItemStyled = styled(ListItem)`
    height: 64px;
`;

const ListItemTextStyled = styled(ListItemText, { shouldForwardProp: props => props !== 'done' })(
    ({ done }) => `
    text-decoration: ${done ? 'line-through' : 'none'};
`
);

// const ContainerStyled = styled('div', { shouldForwardProp: props => props !== 'isEditing' })(
//     ({ isEditing }) => `
//     display: ${isEditing ? 'none' : 'flex'};
//     align-items: center
// `
// );

function Todo({ id, task, completed, removeTodos, toggleTodo, editTodo }) {
    const handleRemoveTodo = () => removeTodos(id);
    const handleToggleTodo = () => toggleTodo(id);
    const [isEditing, toggle] = useToggle(false);
    return (
        <ListItemStyled>
            {isEditing ? (
                <EditTodoForm task={task} id={id} editTodo={editTodo} toggle={toggle} />
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
            {/* <ContainerStyled isEditing={!isEditing}>
                <EditTodoForm task={task} id={id} editTodo={editTodo} toggle={toggle} />
            </ContainerStyled>
            <ContainerStyled isEditing={isEditing}>
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
            </ContainerStyled> */}
        </ListItemStyled>
    );
}

export default Todo;
