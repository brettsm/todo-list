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
}

function displayTodoList(list) {
    const display = document.getElementById('display');
    display.innerHTML = '';

    const card = document.createElement('div');
    
    const project = list[0].project;
    for(todo in list) {

    }
}



export { buildHomePage };

