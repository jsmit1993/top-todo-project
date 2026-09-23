import { addTask } from "./todoLogic";

function buildTaskDiv() {

}


function buildTaskForm() {
    const addTaskdiv = document.createElement('div');
    const addTaskHeader = document.createElement('h2');
    addTaskHeader.textContent = 'Add a Task'
    addTaskHeader.classList.add('addTaskHeader');
    addTaskdiv.classList.add('addTaskdiv');
    addTaskdiv.appendChild(addTaskHeader);
    const addTaskForm = document.createElement('form');

    const taskName = document.createElement('label');
    taskName.classList.add('addTaskdiv1');
    taskName.textContent = 'Task Name';
    taskName.htmlFor = 'taskNameInput'; //add this for each
    const taskNameField = document.createElement('input');
    taskNameField.id = 'taskNameInput'; //add this for each
    taskNameField.type = 'text';
    taskNameField.required = true;

    const taskDescDiv = document.createElement('label');
    taskDescDiv.classList.add('addTaskdiv1');
    taskDescDiv.textContent = 'Description';
    const taskDescField = document.createElement('input');
    taskDescField.type = 'text';

    const taskDueDate = document.createElement('label');
    taskDueDate.classList.add('addTaskdiv1');
    taskDueDate.textContent = 'Due Date';
    const taskDueDateField = document.createElement('input');
    taskDueDateField.type = 'date';

    const taskTagdiv = document.createElement('label');
    taskTagdiv.classList.add('addTaskdiv1');
    taskTagdiv.textContent = 'Tag';
    const taskTagField = document.createElement('input');
    taskTagField.type = 'text';

    //need to see completed and project but then the id fields are not visible
    addTaskForm.appendChild(taskName);
    addTaskForm.appendChild(taskNameField);
    addTaskForm.appendChild(taskDescDiv);
    addTaskForm.appendChild(taskDescField);
    addTaskForm.appendChild(taskDueDate);
    addTaskForm.appendChild(taskDueDateField);
    addTaskForm.appendChild(taskTagdiv);
    addTaskForm.appendChild(taskTagField);

    //title, description, dueDate, tag, completed, project, projectID, taskID
    addTaskdiv.appendChild(addTaskForm);
    
    return addTaskdiv;
}

function buildTasks() {
    const taskSectionTitle = document.createElement('div');
    taskSectionTitle.classList.add('taskListArea')
    taskSectionTitle.textContent = 'Tasks';

    return taskSectionTitle
}

function buildTaskSection() {
    const taskArea = document.createElement('div');
    taskArea.classList.add('taskArea')
    taskArea.appendChild(buildTaskForm());
    taskArea.appendChild(buildTasks());
    return taskArea;
}

export {buildTaskSection}