import { displayDashboard } from "./dashboardDOM";

import { updateProjectDisplay } from "./domManip.js";

import { allProjectList } from './index.js'

import { createProject } from './project.js';

function showProjectForm() {
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
        <button type="submit">Submit</button>
        <button type="button" id="cancel-button">Cancel</button>
    `;

    formContainer.appendChild(form);
    display.appendChild(formContainer);

    // Add event listeners for form submission and cancellation
    form.addEventListener('submit', handleFormSubmit );
    document.getElementById('cancel-button').addEventListener('click', hideForm);
}

function handleFormSubmit(event) {
    event.preventDefault();
    
    const project = document.getElementById('project').value;

    //if allProjectList.containsProject, add it to that project
    //else make a new project titled project

    //create newTodo => addTodo to project (existing/new?), addTodo to total todoList => addProject containing todo to allProjectList
    
    const newProject = createProject(project);
    

    allProjectList.addProject(newProject);

    hideForm();
    updateProjectDisplay(allProjectList);

    
}

function hideForm() {
    const display = document.getElementById('display');
    display.innerHTML = ''; // Clear the display div

    displayDashboard();
}

export { showProjectForm };