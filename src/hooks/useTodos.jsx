import { v4 as uuid } from 'uuid';
import useLocalStorage from './useLocalStorage';

export default initialTodo => {
    const [todos, setTodos] = useLocalStorage('todos', initialTodo);
    return {
        todos,
        addTodos: task => setTodos([...todos, { id: uuid(), task: task, completed: false }]),
        removeTodos: id => setTodos([...todos].filter(todo => todo.id !== id)),
        toggleTodo: id => setTodos(todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))),
        editTodo: (id, newTask) => setTodos(todos.map(todo => (todo.id === id ? { ...todo, task: newTask } : todo))),
    };
};
