import './style.css';
import { displayDashboard } from './dashboardDOM.js';
import { createTodo } from './todo.js';
import { showForm, hideForm, handleFormSubmit } from './todoForm.js';

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

    newButton.addEventListener('click', showForm);
}








export { buildHomePage, displayTodoList, resetDisplay, addNewListButton };

