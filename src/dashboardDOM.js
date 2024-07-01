import { createTodo } from './todo.js';
import { displayTodoList, resetDisplay, addNewListButton } from './domManip.js';

function displayDashboard() {
    resetDisplay();

    const defaultList = [];

    defaultList.push(createTodo('hello','bill',1,2,'test'));

    displayTodoList(defaultList);
    
    addNewListButton;

}

export { displayDashboard };