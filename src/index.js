import { buildHomePage } from './domManip.js';
import { displayDashboard } from './dashboardDOM.js';

buildHomePage('content');

const dashboardBtn = document.getElementById('dashboard-button');
dashboardBtn.addEventListener('click', displayDashboard);