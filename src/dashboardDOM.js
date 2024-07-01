import { createTodo } from './todo.js';
import { displayTodoList, resetDisplay, addNewListButton } from './domManip.js';

function displayDashboard() {
    resetDisplay();

    const defaultList = [];

    defaultList.push(createTodo('First Todo!','Create a new Project!','ASAP',1,'First Project!'));

    displayTodoList(defaultList);
    
    addNewListButton();

}

export { displayDashboard };