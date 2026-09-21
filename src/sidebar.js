import { listProjectsSideBar } from "./domLogic";
import { createNewProjectForm } from "./addProject";
function buildSidebar() {
    const sideBar = document.createElement('div');
    sideBar.classList.add('sideBar');

    const title = document.createElement('h2');
    title.textContent = 'Projects';

    const newProjectBut = document.createElement('button');
    newProjectBut.classList.add('newProjBut');
    newProjectBut.textContent = '+ Project';

    newProjectBut.addEventListener('click', () => {
        const modal = createNewProjectForm();
        document.body.appendChild(modal);
        modal.showModal(); 
    });

    sideBar.appendChild(title);
    sideBar.appendChild(newProjectBut);
    sideBar.appendChild(listProjectsSideBar());

    return sideBar;
}

export { buildSidebar };