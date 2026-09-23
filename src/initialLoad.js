import { createHeader } from "./header";
import { buildSidebar } from "./sidebar";
import { buildTaskSection } from "./taskList";

function mainPageLoad() {
    const doc = document.querySelector('.bigHolder');
    doc.innerHTML = '';
    const headerSection = document.createElement('div');
    headerSection.classList.add('heads')
    headerSection.appendChild(createHeader());
    const side = document.createElement('div');
    side.classList.add('sides');
    side.appendChild(buildSidebar());
    const tasks = document.createElement('div');
    tasks.classList.add('tasks');
    tasks.appendChild(buildTaskSection());

    doc.appendChild(headerSection);
    doc.appendChild(side);
    doc.append(tasks);
}

export { mainPageLoad }