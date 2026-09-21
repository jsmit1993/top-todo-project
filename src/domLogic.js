import { tasks, projects, addProject, addTask } from "./todoLogic";

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



export { listProjectsSideBar }