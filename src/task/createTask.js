// - Recibir id del proyecto y informacion de la tarea.
// - LLamar Array desde localStorage.
// - Obtener indice del proyecto dentro del array.
// - Si aparece:
//   - Agregar tarea al proyecto.
//   - Agregar el array a localStorage.
// - Sino :
//   - Mostrar Proyecto no encontrado.

import uploadElement from "../storage/uploadProject.js";
import getElement from "../storage/getElement.js";
import { verifyEmptyString } from "../verification/verifications.js";
import getProjectIndex from "../storage/projectIndex.js";
import Task from "./taskSkeleton.js";

export default function createNewTask(projectId,taskProperties) {
  const projectContainer = getElement("projects");
  const verification = verifyEmptyString(projectId);
  if (verification) {
    const projectIndex = getProjectIndex(projectContainer,projectId);
    if (projectIndex !== -1) {
      const task = new Task(...taskProperties)
      projectContainer[projectIndex].taskList.push(task);
      uploadElement(projectContainer);
      console.log(projectContainer);
      return;
    }
    console.log("Project not found");
    return;
  }
  console.log("Insert a project id");
  return;
}
