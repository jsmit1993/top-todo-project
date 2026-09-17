import { createHeader } from "./header";
import "./styles.css";
import { buildSidebar } from "./sidebar";

const doc = document.querySelector('.bigHolder');
const headerSection = document.createElement('div');
headerSection.appendChild(createHeader());
const side = document.createElement('div');
side.appendChild(buildSidebar());

doc.appendChild(headerSection);
doc.appendChild(side);