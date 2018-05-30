let nextTodoId = 0;
export const addTodo = (name, date) => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    name,
    date
});

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
});