import './style.css';
import { displayDashboard } from './dashboardDOM.js';


function buildHomePage(contentDiv) {
    const content = document.getElementById(contentDiv);

    const sidebar = document.createElement('div');
    sidebar.classList.add('side-bar');

    const projectDisplay = document.createElement('div');
    projectDisplay.classList.add('project-display');
    projectDisplay.id = 'display';


    const sidebarNav = document.createElement('nav');
    sidebarNav.classList.add('side-nav');
    
    const dashboardButton = document.createElement('button');
    dashboardButton.id = 'dashboard-button';
    dashboardButton.classList.add('nav-button');
    dashboardButton.classList.add('raleway-bold');
    dashboardButton.textContent = 'Dashboard';
    //dashboardButton.addEventListener('click', displayDashboard())
    //TODO: create a module for displayDashboard

    const projectsButton = document.createElement('button');
    projectsButton.id = 'projects-button';
    projectsButton.classList.add('nav-button');
    projectsButton.classList.add('raleway-bold');
    projectsButton.textContent = 'Projects'

    sidebarNav.append(dashboardButton);
    sidebarNav.append(projectsButton);
    sidebar.append(sidebarNav);
    content.append(sidebar);
    content.append(projectDisplay);

    //add button for creating new list

    const newButton = document.createElement('button');
    newButton.classList.add('raleway-bold');
    newButton.id = 'new-button';
    newButton.textContent = '+';
    
    projectDisplay.append(newButton);
    console.log('Appended newButton', newButton);

    //newButton.addEventListener('click', showForm);
}

function hideForm() {
    const display = document.getElementById('display');
    display.innerHTML = ''; // Clear the display div
}

function handleFormSubmit(event) {
    event.preventDefault();
    
    const project = document.getElementById('project').value;
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('due-date').value;
    const priority = document.getElementById('priority').value;

    console.log('Form Data:', { project, title, description, dueDate, priority });

    hideForm();

    // You can now use the form data to create a new project or todo item
    // For example:
    // const newTodo = createTodo(title, description, priority, dueDate, project);
    // displayTodoList([...existingTodos, newTodo]);
}

function showForm() {
    const display = document.getElementById('display');

    // Clear any existing content in the display div
    display.innerHTML = '';

    const formContainer = document.createElement('div');
    formContainer.id = 'form-container';

    const form = document.createElement('form');
    form.id = 'project-form';

    form.innerHTML = `
        <label for="project">Project:</label>
        <input type="text" id="project" name="project" required><br>
        <label for="title">Title:</label>
        <input type="text" id="title" name="title" required><br>
        <label for="description">Description:</label>
        <textarea id="description" name="description" required></textarea><br>
        <label for="due-date">Due Date:</label>
        <input type="date" id="due-date" name="due-date" required><br>
        <label for="priority">Priority:</label>
        <select id="priority" name="priority" required>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
        </select><br>
        <button type="submit">Submit</button>
        <button type="button" id="cancel-button">Cancel</button>
    `;

    formContainer.appendChild(form);
    display.appendChild(formContainer);

    // Add event listeners for form submission and cancellation
    form.addEventListener('submit', handleFormSubmit );
    document.getElementById('cancel-button').addEventListener('click', hideForm);
}

function displayTodoList(list) {
    const display = document.getElementById('display');
    display.innerHTML = '';

    const card = document.createElement('div');
    card.classList.add('content-card');

    for(let i = 0; i < list.length; i++) {
        console.log('Appending todo....');

        const projectDiv = document.createElement('div');
        projectDiv.textContent = list[i].project;
        projectDiv.classList.add('raleway-bold');
        card.append(projectDiv);

        const titleDiv = document.createElement('div');
        titleDiv.textContent = 'TITLE: ' + list[i].title;
        titleDiv.classList.add('raleway-normal','todo-element');
        card.append(titleDiv);

        const descriptionDiv = document.createElement('div');
        descriptionDiv.textContent = list[i].description;
        descriptionDiv.classList.add('raleway-normal', 'todo-element');
        card.append(descriptionDiv);

        const priorityDiv = document.createElement('div');
        priorityDiv.textContent = 'PRIORITY: ' + list[i].priority;
        priorityDiv.classList.add('raleway-normal');
        priorityDiv.classList.add('todo-element');
        card.append(priorityDiv);
    }
    display.append(card);
}

function resetDisplay() {
    const display = document.getElementById('display');
    display.innerHTML = '';
    
}

function addNewListButton() {

    const display = document.getElementById('display');
    const newButton = document.createElement('button');
    newButton.classList.add('raleway-bold');
    newButton.id = 'new-button';
    newButton.textContent = '+';
    
    display.append(newButton);
    console.log('Appended newButton!!!!!', newButton);
}






export { buildHomePage, displayTodoList, resetDisplay, addNewListButton, showForm };

