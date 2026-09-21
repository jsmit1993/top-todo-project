import { addProject } from "./todoLogic";
import { mainPageLoad } from "./initialLoad"; 

function createNewProjectForm() {
    const dialog = document.createElement('dialog');
    dialog.classList.add('addProjectDialog');

    const form = document.createElement('form');
    form.method = 'dialog'; // Closes dialog on submit natively

    // Inputs setup
    const projectName = document.createElement('div');
    projectName.textContent = 'Project Name';
    const nameField = document.createElement('input');
    nameField.type = 'text';
    nameField.required = true;

    const projectDescription = document.createElement('div');
    projectDescription.textContent = 'Project Description';
    const descriptionField = document.createElement('input');
    descriptionField.type = 'text';

    const actions = document.createElement('div');
    actions.classList.add('form-actions');

    const cancelBtn = document.createElement('button');
    cancelBtn.type = 'button';
    cancelBtn.textContent = 'Cancel';
    cancelBtn.addEventListener('click', () => dialog.close());

    const submitBtn = document.createElement('button');
    submitBtn.classList.add('submitBtn');
    submitBtn.type = 'submit';
    submitBtn.textContent = 'Create Project';

    form.appendChild(projectName);
    form.appendChild(nameField);
    form.appendChild(projectDescription);
    form.appendChild(descriptionField);
    actions.appendChild(cancelBtn);
    actions.appendChild(submitBtn);
    form.appendChild(actions);
    dialog.appendChild(form);

    // Event Triggers
    form.addEventListener('submit', () => {
        const id = crypto.randomUUID();
        addProject(nameField.value, descriptionField.value, 'Active', id);
        
        // Re-render the app layout cleanly to reflect the new project array item
        mainPageLoad(); 
    });

    // Cleanup memory when closed
    dialog.addEventListener('close', () => {
        dialog.remove();
    });

    return dialog;
}

export { createNewProjectForm };
