import { todo } from './todo.js';

function createProject(name) {
    let name = name;
    let todoList = [];

    const addTodo = function(todo) {
        todoList.push(todo);
    };
    //TODO: const removeTodo = function(name)
    const getTodoAt = function(index) {
        return todoList[index];
    }
}

export { createProject };