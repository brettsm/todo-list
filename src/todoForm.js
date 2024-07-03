import { displayDashboard } from "./dashboardDOM";

function showForm() {
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
        <label for="title">Title:</label>
        <input type="text" id="title" name="title" required><br>
        <label for="description">Description:</label>
        <textarea id="description" name="description" required></textarea><br>
        <label for="due-date">Due Date:</label>
        <input type="date" id="due-date" name="due-date" required><br>
        <label for="priority">Priority:</label>
        <select id="priority" name="priority" required>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
        </select><br>
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
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('due-date').value;
    const priority = document.getElementById('priority').value;

    const newTodo = createTodo(project, title, description, dueDate, priority);

    hideForm();

    // You can now use the form data to create a new project or todo item
    // For example:
    // const newTodo = createTodo(title, description, priority, dueDate, project);
    // displayTodoList([...existingTodos, newTodo]);
}

function hideForm() {
    const display = document.getElementById('display');
    display.innerHTML = ''; // Clear the display div

    displayDashboard();
}

export { showForm, handleFormSubmit, hideForm };