class Todo {
    constructor(title, description, dueDate, tag, completed, project, projectID, taskID) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.tag = tag;
        this.completed = completed;
        this.project = project;
        this.projectID = projectID
        this.taskID = taskID
        
    }
    toggleCompleted() {
        this.completed = this.completed === 'yes' ? 'no' : 'yes';
    }
}

class Project {
    constructor(name, description, status, projectID) {
        this.name = name;
        this.description = description;
        this.status = status;
        this.projectID = projectID
    }
}

let tasks = [];
let projects = [];

function addTask(title, description, dueDate, tag, completed, project, projectID, taskID) {
    let newTask = new Todo(title, description, dueDate, tag, completed, project, projectID, taskID);
    tasks.push(newTask);
    console.log(newTask);
    saveToLocalStorage();
}

function addProject(name, description, status, projectID) {
    let newProject = new Project(name, description, status, projectID);
    projects.push(newProject);
    saveToLocalStorage();
}

function saveToLocalStorage() {
    localStorage.setItem('taskList', JSON.stringify(tasks));
    localStorage.setItem('projectList', JSON.stringify(projects));
}

function pullfromLocalStorage() {
    const savedTasks = JSON.parse(localStorage.getItem('taskList')) || [];
    const savedProjects = JSON.parse(localStorage.getItem('projectList')) || [];

    tasks.length = 0;
    projects.length = 0;

    savedProjects.forEach(p =>{
        let restoredProject = new Project(p.name, p.description, p.status, p.projectID)
        projects.push(restoredProject);
    })

    savedTasks.forEach(t => {
        let restoredTask = new Todo(
            t.title, 
            t.description, 
            t.dueDate, 
            t.tag, 
            t.completed, 
            t.project, 
            t.projectID, 
            t.taskID
        )
        tasks.push(restoredTask);
    })
    
}

function deleteTask(taskID) {
    const taskIndex = tasks.findIndex(task => task.taskID === taskID);
    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1); 
        saveToLocalStorage();       
    }
}

function editTask(taskID, newTitle, newDescription, newDueDate, newTag, newCompleted, newProject, newProjectID) {
    const task = tasks.find(t => t.taskID === taskID);

    if (task) {
        task.title = newTitle;
        task.description = newDescription;
        task.dueDate = newDueDate;
        task.tag = newTag;
        task.completed = newCompleted;
        task.project = newProject;
        task.projectID = newProjectID;

        saveToLocalStorage();
    }
}

export { tasks, projects, addTask, addProject, pullfromLocalStorage, deleteTask, editTask };