import getElement from "../../../storage/getElement.js";
import projectBtn from "./projectBox.js";

export default function showProjects() {
  const displayContainer = document.querySelector(".project-container");
  const storageContainer = getElement("projects");

  displayContainer.innerHTML = "";
  for (const project of storageContainer) {
    displayContainer.append(projectBtn(project));
  }
}

