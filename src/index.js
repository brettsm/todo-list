import { buildHomePage, addNewListButton} from './domManip.js';
import { displayDashboard } from './dashboardDOM.js';
import { showForm } from './todoForm.js';
import { createProjectList } from './projectList.js';
import { createTodoList } from './todoList.js';
import { createProject } from './project.js';
import { createTodo } from './todo.js';


//TODO: Find a way to make the showForm/addNewListButton stay on screen without needing to display it 

const allTodoList = createTodoList();
const allProjectList = createProjectList();

buildHomePage('content');

addNewListButton();

displayDashboard();

const dashboardBtn = document.getElementById('dashboard-button');
dashboardBtn.addEventListener('click', displayDashboard);

const projectBtn = document.getElementById('projects-button');


export { allTodoList, allProjectList };
