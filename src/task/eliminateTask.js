import getElement from "../storage/getElement.js";
import uploadElement from "../storage/uploadProject.js";

export default function eliminateTask(projectId, taskId) {
  const project = getElement(projectId);
  const indexTask = project.taskList.findIndex((el) => el.id === taskId);
  if (indexTask !== -1) {
    project.taskList.splice(indexTask, 1);
    uploadElement(project);
    return "Task Eliminated";
  }
  return "Task Not found";
}
