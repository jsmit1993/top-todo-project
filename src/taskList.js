import { mainPageLoad } from "./initialLoad";
import { addTask, projects, tasks } from "./todoLogic";

function buildTaskDiv(task) {
    const individualTask = document.createElement('div');
    individualTask.classList.add('individualTask');
    
    const individualTaskTitle = document.createElement('h3');
    individualTaskTitle.classList.add('individualTaskTitle');
    individualTaskTitle.textContent = task.title;

    const individualDescription = document.createElement('p');
    individualDescription.classList.add('individualDescipt');
    individualDescription.textContent = task.description;

    const individalDueDate = document.createElement('p');
    individalDueDate.classList.add('individualDueDate');
    individalDueDate.textContent = task.dueDate;

    const individualTag = document.createElement('p');
    individualTag.classList.add('individualTag');
    individualTag.textContent = task.tag;

    const individualProject = document.createElement('p');
    individualProject.classList.add('individualProject');
    individualProject.textContent = task.project;

    const individualCompetion = document.createElement('p');
    individualCompetion.classList.add('individualComp');
    individualCompetion.textContent = task.completed;

    
    individualTask.appendChild(individualTaskTitle);
    individualTask.appendChild(individualDescription);
    individualTask.appendChild(individalDueDate);
    individualTask.appendChild(individualTag);
    individualTask.appendChild(individualProject);

    individualTask.appendChild(individualCompetion);
    return individualTask;
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
    taskDescDiv.htmlFor = 'taskDescpField';
    const taskDescField = document.createElement('input');
    taskDescField.id = 'taskDescpField';
    taskDescField.type = 'text';

    const taskDueDate = document.createElement('label');
    taskDueDate.classList.add('addTaskdiv1');
    taskDueDate.textContent = 'Due Date';
    taskDueDate.htmlFor = 'taskDueDate';
    const taskDueDateField = document.createElement('input');
    taskDueDateField.id = 'taskDueDate';
    taskDueDateField.type = 'date';

    const taskTagdiv = document.createElement('label');
    taskTagdiv.classList.add('addTaskdiv1');
    taskTagdiv.textContent = 'Tag';
    taskTagdiv.htmlFor = 'taskTag';
    const taskTagField = document.createElement('input');
    taskTagField.id = 'taskTag'
    taskTagField.type = 'text';

    const taskComplete = document.createElement('label');
    taskComplete.classList.add('addTaskdiv1');
    taskComplete.textContent = 'Completed?';
    taskComplete.htmlFor = 'taskComplete';
    const taskCompleteSelect = document.createElement('select');
    taskCompleteSelect.id = 'taskComplete';
    const optionY = document.createElement('option');
    optionY.value = 'yes';
    optionY.textContent = 'Yes';
    const optionN = document.createElement('option');
    optionN.value = 'no';
    optionN.textContent = 'No';
    taskCompleteSelect.appendChild(optionN);
    taskCompleteSelect.appendChild(optionY);

    const projectAssignment = document.createElement('label');
    projectAssignment.classList.add('addTaskdiv1');
    projectAssignment.textContent = 'Project';
    projectAssignment.htmlFor = 'projectAssigning';
    const projectSelect = document.createElement('select');
    projectSelect.id = 'projectAssigning';

    projects.forEach(project => {
        const option = document.createElement('option');
        option.value = project.projectID;
        option.textContent = project.name;
        projectSelect.appendChild(option);
    })

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.classList.add('taskSubmitButton');
    submitButton.textContent = '+ Task';
    
    addTaskForm.appendChild(taskName);
    addTaskForm.appendChild(taskNameField);
    addTaskForm.appendChild(taskDescDiv);
    addTaskForm.appendChild(taskDescField);
    addTaskForm.appendChild(taskDueDate);
    addTaskForm.appendChild(taskDueDateField);
    addTaskForm.appendChild(taskTagdiv);
    addTaskForm.appendChild(taskTagField);
    addTaskForm.appendChild(taskComplete);
    addTaskForm.appendChild(taskCompleteSelect);
    addTaskForm.appendChild(projectAssignment);
    addTaskForm.appendChild(projectSelect);
    addTaskForm.appendChild(submitButton);

    //event listener for all the stuff above on the button????
    addTaskdiv.appendChild(addTaskForm);
    
    addTaskForm.addEventListener('submit', addTaskfromForm);
    return addTaskdiv;
}

function addTaskfromForm(e) {
    e.preventDefault();

    const form = e.target;
    const projectSelect = form.querySelector('#projectAssigning');
    const selectProjectID = projectSelect.value;
    const matchedProjectName = projects.find(p => p.projectID === selectProjectID);
    const projectName = matchedProjectName ? matchedProjectName.name : 'Unassigned';

    addTask(
        form.querySelector('#taskNameInput').value,
        form.querySelector('#taskDescpField').value,
        form.querySelector('#taskDueDate').value,
        form.querySelector('#taskTag').value,
        form.querySelector('#taskComplete').value,
        projectName,
        selectProjectID,
        crypto.randomUUID()
    )
    form.reset();
    mainPageLoad();
}

function buildTasks() {
    const taskSectionTitle = document.createElement('div');
    taskSectionTitle.classList.add('taskListArea')
    const taskSectionHeader = document.createElement('h2');
    taskSectionHeader.classList.add('taskHeader');
    taskSectionHeader.textContent = 'Task List';

    taskSectionTitle.appendChild(taskSectionHeader);

    tasks.forEach(task => {
        taskSectionTitle.appendChild(buildTaskDiv(task))
    })
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