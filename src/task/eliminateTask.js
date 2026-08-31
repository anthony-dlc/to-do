// - Recibir id del proyecto y id de la tarea.
// - LLamar Array desde localStorage.
// - Obtener indice del proyecto dentro del array.
// - Si aparece:
//   - Buscar indice del id de la tarea dentro del proyecto.
//   - Si aparece:
//     - Eliminar tarea del proyecto.
//     - Agregar Array a localStorage.
//   - Sino:
//     - Mostrar tarea no encontrada.
// - Sino:
//   - Mostrar proyecto no encontrado.

import getElement from "../storage/getElement.js";
import getProjectIndex from "../storage/projectIndex.js";
import uploadElement from "../storage/uploadProject.js";

export default function eliminateTask(projectId, taskId) {
  const projectContainer = getElement("projects");
  const projectIndex = getProjectIndex(projectContainer, projectId);
  if (projectIndex !== -1) {
    const taskIndex = getProjectIndex(
      projectContainer[projectIndex].taskList,
      taskId,
    );
    if (taskIndex !== -1) {
      projectContainer[projectIndex].taskList.splice(taskIndex, 1);
      uploadElement(projectContainer)
      return;
    }
    console.log("Task not found");
    return;
  }
  console.log("Project not found");
  return;
}

