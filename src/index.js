import { buildHomePage} from './domManip.js';
import { displayDashboard } from './dashboardDOM.js';
import { showForm } from './todoForm.js';

buildHomePage('content');

const dashboardBtn = document.getElementById('dashboard-button');
dashboardBtn.addEventListener('click', displayDashboard);

const projectBtn = document.getElementById('projects-button');
