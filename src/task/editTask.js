import getElement from "../storage/getElement.js";
import uploadElement from "../storage/uploadProject.js";

export default function editTask(projectId, taskId, propertyName, newValue) {
  const project = getElement(projectId);
  const taskIndex = project.taskList.findIndex((el) => el.id === taskId);
  project.taskList[taskIndex][propertyName] = newValue;
  uploadElement(project);
}
