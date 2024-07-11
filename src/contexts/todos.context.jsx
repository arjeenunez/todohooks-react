import { createContext, useDeferredValue, useReducer } from 'react';
// import useTodos from '../hooks/useTodos';
import SampleTodos from '../SampleTodos';
import todosReducer from '../reducers/todos.reducers';
// import useLocalStorage from '../hooks/useLocalStorage';
import useLocalStorageReducer from '../reducers/localStorage.reducer';

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
    const [todos, dispatch] = useLocalStorageReducer('todos', SampleTodos, todosReducer);
    // const [initialTodos] = useLocalStorage('todos', SampleTodos);
    // const [todos, dispatch] = useReducer(todosReducer, initialTodos);
    return (
        <TodosContext.Provider value={todos}>
            <DispatchContext.Provider value={dispatch}>{props.children}</DispatchContext.Provider>
        </TodosContext.Provider>
    );
}
