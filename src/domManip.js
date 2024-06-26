import './style.css';

function buildHomePage(contentDiv) {
    const content = document.getElementById(contentDiv);

    const sidebar = document.createElement('div');
    sidebar.classList.add('side-bar');

    const projectDisplay = document.createElement('div');
    projectDisplay.classList.add('project-display');
    
    content.append(sidebar);
    content.append(projectDisplay);

}

export { buildHomePage };

