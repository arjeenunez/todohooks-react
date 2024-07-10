import { v4 as uuid } from 'uuid';

export default [
    { id: uuid(), task: 'Walk the dog.', completed: true },
    { id: uuid(), task: 'Clean the car.', completed: true },
    { id: uuid(), task: 'Do the dishes.', completed: false },
];
