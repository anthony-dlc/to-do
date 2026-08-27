// Recibir id del padre.
// Recibir la informacion del hijo.
// Agregar la informacion del hijo al padre.
// Almacenar al padre en localStorage.

import uploadElement from "../storage/uploadProject.js";
import getElement from "../storage/getElement.js";

export default function addTask(projectId, taskProperties) {
  const project = getElement(projectId);
  project.taskList.push(taskProperties);
  uploadElement(project);
}
