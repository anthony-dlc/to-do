import closeFormContainer from "./display/closeFormContainer.js";
import eliminateTask from "./task/eliminateTask.js";
import showTasks from "./display/taskSection/tasksList/showTasks.js";

export default function documentEvents() {
  const formContainer = document.querySelector(".form-container");
  document.addEventListener("click", (e) => {
    const projectInfoList = document.querySelector(".project-info-list");

    if (!projectInfoList) return;

    if (!projectInfoList.contains(e.target)) {
      projectInfoList.classList.add("hidden");
      return;
    }
  });

  document.addEventListener("click", (e) => {
    const btnEliminateTask = e.target.closest(".eliminate-task-btn");
    if (btnEliminateTask) {
      const section = document.querySelector("section");
      const projectId = section.dataset.projectId;
      const taskId = btnEliminateTask.dataset.taskId;
      eliminateTask(projectId, taskId);
      if (formContainer.classList.contains("hidden")) {
        showTasks(projectId);
        alert("Task Successfully Eliminated");
        return;
      } else {
        showTasks(projectId);
        closeFormContainer(formContainer);
        alert("Task Successfully Eliminated");
      }

      return;
    }
  });
}
