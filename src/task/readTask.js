// leer id del padre - guardar informacion
// leer id del hijo.
// recorrer padre buscando id del hijo.
// verificar que el hijo exista
// mostrar hijo

import getElement from "../storage/getElement.js";

export default function readTask(projectId, taskId) {
  const project = getElement(projectId);
  console.log(project);
  const task = project.taskList.find((el) => el.id === taskId);
  console.log(task);
  return task;
}
