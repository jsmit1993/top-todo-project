import { createHeader } from "./header";
import { buildSidebar } from "./sidebar";

function mainPageLoad() {
    const doc = document.querySelector('.bigHolder');
    doc.innerHTML = '';
    const headerSection = document.createElement('div');
    headerSection.appendChild(createHeader());
    const side = document.createElement('div');
    side.appendChild(buildSidebar());

    doc.appendChild(headerSection);
    doc.appendChild(side);
}

export { mainPageLoad }