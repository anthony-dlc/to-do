// - Recibir informacion/ nombre del proyecto.
// - Llamar array desde localStorage.
// - Agregar proyecto dentro del array.
// - Agregar Array a localStorage. -> agregar array con el mismo nombre siempre

import Project from "./projectSkeleton.js";
import { verifyEmptyString } from "../verification/verifications.js"; // Testeo
import uploadElement from "../storage/uploadProject.js";
import getElement from "../storage/getElement.js";

export default function createNewProject(name) {
  const projectContainer = getElement("projects");
  const validation = verifyEmptyString(name);
  if (validation) {
    const project = new Project(name);
    projectContainer.push(project);
    uploadElement(projectContainer);
    return;
  }
  console.log("Insert a Project name");
  return;
}
