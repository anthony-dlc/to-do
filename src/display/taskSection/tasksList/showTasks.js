import readProject from "../../../project/readProject.js";
import taskItem from "./task-display/taskItem.js";

export default function showTasks(prt) {
  const project = readProject(prt)

  const list = document.querySelector(".task-container")
  list.innerHTML = ""

  for (const task of project.taskList) {
    list.append(taskItem(task));
  }

  return list;
}

