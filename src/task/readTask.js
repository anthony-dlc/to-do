// - Recibir id del proyecto y id de la tarea.
// - LLamar Array desde localStorage.
// - Obtener indice del proyecto dentro del array.
// - Si aparece:
//   - Buscar indice del id de la tarea dentro del proyecto.
//   - Si aparece:
//     - Mostrar tarea.
//   - Sino:
//     - Mostrar tarea no encontrada.
// - Si no:
//   Mostrar proyecto no encontrado.

import getElement from "../storage/getElement.js";
import getProjectIndex from "../storage/projectIndex.js";

export default function readTask(projectId, taskId) {
  const projectContainer = getElement("projects");
  const projectIndex = getProjectIndex(projectContainer,projectId);
  if (projectIndex !== -1) {
    const task = projectContainer[projectIndex].taskList.find(
      (t) => (t.id === taskId),
    );
    if (!task) {
      console.log("Task not found");
      return;
    }
    // console.log(task);
    return task;
  }
  console.log("Project not found");
  return;
}
