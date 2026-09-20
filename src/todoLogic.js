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
}

function addProject(name, description, status, projectID) {
    let newProject = new Project(name, description, status, projectID);
    projects.push(newProject);
}


export { tasks, projects, addTask, addProject };