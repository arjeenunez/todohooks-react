import { createContext, useDeferredValue, useReducer } from 'react';
// import useTodos from '../hooks/useTodos';
import SampleTodos from '../SampleTodos';
import todosReducer from '../reducers/todos.reducers';
import useLocalStorage from '../hooks/useLocalStorage';

export const TodosContext = createContext();

export function TodosProvider(props) {
    const [initialTodos] = useLocalStorage('todos', SampleTodos);
    const [todos, dispatch] = useReducer(todosReducer, initialTodos);
    return <TodosContext.Provider value={{ todos, dispatch }}>{props.children}</TodosContext.Provider>;
}
