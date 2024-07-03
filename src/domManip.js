import './style.css';
import { displayDashboard } from './dashboardDOM.js';
import { createTodo } from './todo.js';
import { showForm, hideForm, handleFormSubmit } from './todoForm.js';
import { createProjectList } from './projectList.js';
import { allProjectList, allTodoList } from './index.js';
import { createProject } from './project.js';

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

    const projectsDiv = document.createElement('div');
    projectsDiv.id = 'projects-div';
    projectsDiv.classList.add('card-styling');
    console.log('appended: ', projectsDiv);
    const projectsTitle = document.createElement('h2');
    projectsTitle.id = 'projects-title';
    projectsTitle.classList.add('raleway-bold');
    projectsTitle.textContent = 'Projects'

    sidebarNav.append(dashboardButton);
    sidebarNav.append(projectsTitle);
    sidebarNav.append(projectsDiv);
    sidebar.append(sidebarNav);
    content.append(sidebar);
    content.append(projectDisplay);

    displayProjects(allProjectList);
    
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

function displayProjectTodos(project) {
    console.log('appending todos from ' + project);
    resetDisplay();
    const projectDisplayCard = document.createElement('div');
    projectDisplayCard.id = 'project-display-card';
    projectDisplayCard.classList.add('flex-column-center');
    projectDisplayCard.classList.add('raleway-normal');
    projectDisplayCard.classList.add('card-styling');
    const display = document.getElementById('display');
    for(let i = 0; i < allTodoList.getLength(); i++) {
        if(allTodoList.getProjectAt(i) == project) {
            const todoDiv = document.createElement('div');
            todoDiv.id = 'todo-div-' + allTodoList.getTitleAt(i);
            todoDiv.classList.add('raleway-normal');
            todoDiv.textContent = allTodoList.getTitleAt(i);

            projectDisplayCard.append(todoDiv);
        }
    }
    display.append(projectDisplayCard);

}

function displayProjects(projectList) {
    const projectSideDiv = document.getElementById('projects-div');
    if (!projectSideDiv) {
        console.error('Element with id "projects-div" not found');
        return;
    }

    for (let i = 0; i < projectList.getLength(); i++) {
        const navProject = document.createElement('button');
        navProject.id = 'nav-' + projectList.getProjectAt(i).getName() + '-button';
        navProject.textContent = projectList.getProjectAt(i).getName();
        navProject.classList.add('raleway-normal');
        projectSideDiv.append(navProject);

        //add active Listener so when you click on the project it displays all todos associated
        navProject.addEventListener('click', () => displayProjectTodos(projectList.getProjectAt(i).getName()));
    }
}








export { buildHomePage, displayTodoList, resetDisplay, addNewListButton, displayProjects };

