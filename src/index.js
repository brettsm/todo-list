import { buildHomePage, addNewListButton} from './domManip.js';
import { displayDashboard } from './dashboardDOM.js';
import { showForm } from './todoForm.js';


//TODO: Find a way to make the showForm/addNewListButton stay on screen without needing to display it 

buildHomePage('content');

addNewListButton();

displayDashboard();

const dashboardBtn = document.getElementById('dashboard-button');
dashboardBtn.addEventListener('click', displayDashboard);

const projectBtn = document.getElementById('projects-button');



