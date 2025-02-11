import { buildHomePage, addNewListButton} from './domManip.js';
import { displayDashboard } from './dashboardDOM.js';
import { createProjectList } from './projectList.js';
import { createTodoList } from './todoList.js';
import { createProject } from './project.js';
import { createTodo } from './todo.js';


const allTodoList = createTodoList();
const allProjectList = createProjectList();

allProjectList.addProject(createProject('test'));
allTodoList.addTodo(createTodo('title', 'description', '01022023', 'low', 'test'));

buildHomePage('content');

addNewListButton();

displayDashboard();

const dashboardBtn = document.getElementById('dashboard-button');
dashboardBtn.addEventListener('click', () => displayDashboard());


export { allTodoList, allProjectList };
