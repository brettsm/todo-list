import { createTodo } from './todo.js';

function displayDashboard() {
    const display = document.getElementById('display');
    display.innerHTML = '';

    const textDiv = document.createElement('div');
    textDiv.textContent = 'Hello';

    display.append(textDiv);

    const defaultList = [];

    defaultList.push(createTodo('hello','bill',1,2,'test'));

    

}

export { displayDashboard };