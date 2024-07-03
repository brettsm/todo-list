import { buildHomePage, showForm } from './domManip.js';
import { displayDashboard } from './dashboardDOM.js';

buildHomePage('content');

const dashboardBtn = document.getElementById('dashboard-button');
dashboardBtn.addEventListener('click', displayDashboard);

const newTodoButton = document.getElementById('new-button');
newTodoButton.addEventListener('click', showForm);
