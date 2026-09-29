import { tasks, projects, addProject, addTask, editTask } from "./todoLogic";
import { mainPageLoad } from "./initialLoad";

function listProjectsSideBar() {
    const projectList = document.createElement('div');
    projectList.classList.add('projectList');

    projects.forEach(project => {
        let div = document.createElement('div')
        div.classList.add('proj');
        div.textContent = project.name;
        projectList.appendChild(div);
    });    

    return projectList;
}

function showEditTaskModal(task) {
    const dialog = document.createElement('dialog');
    dialog.classList.add('editTaskModal');

    const form = document.createElement('form');
    form.method = 'dialog';

    const header = document.createElement('h2');
    header.textContent = 'Edit Task';
    form.appendChild(header);

    // 1. Pre-filled Task Name
    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Task Name';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.value = task.title; // Pre-fills existing title value
    nameInput.required = true;
    form.appendChild(nameLabel);
    form.appendChild(nameInput);

    // 2. Pre-filled Description
    const descLabel = document.createElement('label');
    descLabel.textContent = 'Description';
    const descInput = document.createElement('input');
    descInput.type = 'text';
    descInput.value = task.description;
    form.appendChild(descLabel);
    form.appendChild(descInput);

    // 3. Pre-filled Due Date
    const dateLabel = document.createElement('label');
    dateLabel.textContent = 'Due Date';
    const dateInput = document.createElement('input');
    dateInput.type = 'date';
    dateInput.value = task.dueDate;
    form.appendChild(dateLabel);
    form.appendChild(dateInput);

    // 4. Pre-filled Tag
    const tagLabel = document.createElement('label');
    tagLabel.textContent = 'Tag';
    const tagInput = document.createElement('input');
    tagInput.type = 'text';
    tagInput.value = task.tag;
    form.appendChild(tagLabel);
    form.appendChild(tagInput);

    // 5. Pre-filled Status Selection
    const completeLabel = document.createElement('label');
    completeLabel.textContent = 'Completed?';
    const completeSelect = document.createElement('select');
    const optY = document.createElement('option'); optY.value = 'yes'; optY.textContent = 'Yes';
    const optN = document.createElement('option'); optN.value = 'no'; optN.textContent = 'No';
    completeSelect.appendChild(optN);
    completeSelect.appendChild(optY);
    completeSelect.value = task.completed; // Pre-selects active status
    form.appendChild(completeLabel);
    form.appendChild(completeSelect);

    // 6. Pre-filled Project Selection Dropdown
    const projectLabel = document.createElement('label');
    projectLabel.textContent = 'Project';
    const projectSelect = document.createElement('select');
    projects.forEach(p => {
        const option = document.createElement('option');
        option.value = p.projectID;
        option.textContent = p.name;
        projectSelect.appendChild(option);
    });
    projectSelect.value = task.projectID; // Pre-selects assigned project
    form.appendChild(projectLabel);
    form.appendChild(projectSelect);

    // Actions Buttons Layout
    const actionsDiv = document.createElement('div');
    const cancelBtn = document.createElement('button');
    cancelBtn.type = 'button';
    cancelBtn.textContent = 'Cancel';
    cancelBtn.addEventListener('click', () => dialog.close());

    const saveBtn = document.createElement('button');
    saveBtn.type = 'submit';
    saveBtn.textContent = 'Save Changes';
    
    actionsDiv.appendChild(cancelBtn);
    actionsDiv.appendChild(saveBtn);
    form.appendChild(actionsDiv);
    dialog.appendChild(form);
    document.body.appendChild(dialog);

    // Display overlay popup modal window to viewer natively
    dialog.showModal();

    // Submission event logic triggers save changes updates
    form.addEventListener('submit', () => {
        const targetProjID = projectSelect.value;
        const matchedProj = projects.find(p => p.projectID === targetProjID);
        const projectName = matchedProj ? matchedProj.name : 'Unassigned';

        editTask(
            task.taskID,
            nameInput.value,
            descInput.value,
            dateInput.value,
            tagInput.value,
            completeSelect.value,
            projectName,
            targetProjID
        );

        mainPageLoad(); // Re-render application UI with mutated values
    });

    // Cleanup node elements safely from memory loop on close
    dialog.addEventListener('close', () => dialog.remove());
}




export { listProjectsSideBar, showEditTaskModal }