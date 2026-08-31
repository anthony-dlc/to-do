// - Recibir id del proyecto, id de la tarea, propiedad de la tarea y nuevo valor.
// - LLamar Array desde localStorage.
// - Obtener indice del proyecto dentro del array.
// - Si aparece:
//   - Buscar indice del id de la tarea dentro del proyecto.
//   - Si aparece:
//     - Cambiar propiedad con el nuevo valor.
//     - Agregar array a localStorage.
//   - Sino:
//     - Mostrar Tarea no encontrada.
// - Sino:
//   - Mostrar proyecto no encontrado.

import getElement from "../storage/getElement.js";
import getProjectIndex from "../storage/projectIndex.js";
import uploadElement from "../storage/uploadProject.js";

export default function editTask(projectId, taskId, propertyName, newValue) {
  const projectContainer = getElement("projects");
  const projectIndex = getProjectIndex(projectContainer, projectId);
  if (projectIndex !== -1) {
    const taskIndex = getProjectIndex(
      projectContainer[projectIndex].taskList,
      taskId,
    );
    if (taskIndex !== -1) {
      projectContainer[projectIndex].taskList[taskIndex][propertyName] =
        newValue;
      uploadElement(projectContainer);
      return;
    }
    console.log("Task not found");
    return;
  }
  console.log("Project not found");
  return;
}

