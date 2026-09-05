import {
  verifyEmptyString,
  verifyRadioValues,
  verifyTitle,
  verifyDescription,
  verifyDate,
  cleanInputs,
} from "../verification/verifications.js";
import showProjects from "./homePage/showProject/showProjects.js";
import createNewProject from "../project/createProject.js";
import closeFormContainer from "./closeFormContainer.js";
import editProjectName from "../project/editProject.js";
import taskSection from "./taskSection/section.js";
import createNewTask from "../task/createTask.js";
import showTasks from "./taskSection/tasksList/showTasks.js";
import eliminateTask from "../task/eliminateTask.js";

export default function bodyEvents() {
  const body = document.querySelector("body");

  body.addEventListener("click", (e) => {
    // EVENTOS DEL FORMULARIO PARA AGREGAR UN PROJECT:
    const formContainer = document.querySelector(".form-container");
    const btnAddNewProject = e.target.closest(".add-new-project");
    if (btnAddNewProject) {
      const input = document.querySelector(".project-name");
      const verification = verifyEmptyString(input.value);
      if (verification) {
        createNewProject(input.value);
        input.value = "";
        alert("Project successfully added!");
        closeFormContainer(formContainer);
        showProjects();
        return;
      }
      alert("Insert a Project name");
      return;
    }

    // EVENTO DEL FORMULARIO PARA CERRAR EL FORMULARIO:

    const btnCloseForm = e.target.closest(".btn-close-form");
    if (btnCloseForm) {
      formContainer.textContent = "";
      closeFormContainer(formContainer);
      return;
    }

    // BOTON PARA CAMBIAR NOMBRE DEL PROJECT:

    const btnEditProjectName = e.target.closest(".btn-edit-project-name");
    if (btnEditProjectName) {
      const section = document.querySelector("section");
      const container = document.querySelector(".container");
      const input = document.querySelector(".project-name");
      const verification = verifyEmptyString(input.value);

      const id = section.dataset.projectId;

      if (verification) {
        editProjectName(id, input.value);
        input.value = "";
        container.innerHTML = "";
        container.append(taskSection(id));
        alert("Project's Name Changed!");
        closeFormContainer(formContainer);

        showTasks(id);
        return;
      }
      alert("Insert New Name");
      return;
    }

    // BOTON CREAR NUEVA TASK:

    const btnCreateNewTask = e.target.closest(".create-task-btn");
    if (btnCreateNewTask) {
      const section = document.querySelector("section");
      const id = section.dataset.projectId;
      const title = verifyTitle();
      const description = verifyDescription();
      const date = verifyDate();
      const priority = verifyRadioValues("priority-container");
      const status = verifyRadioValues("status-container");
      if (title && description && date && priority && status) {
        createNewTask(id, [title, description, date, priority, status]);
        alert("Task Successfully Added!");
        closeFormContainer(formContainer);
        showTasks(id);
        cleanInputs();
        return;
      }
      return;
    }

    // BOTON ELIMINAR TAREA:

    // const btnEliminateTask = e.target.closest(".eliminate-task-btn");
    // if (btnEliminateTask) {
    //   const section = document.querySelector("section");
    //   const projectId = section.dataset.projectId;
    //   const taskId = btnEliminateTask.dataset.taskId;
    //   eliminateTask(projectId, taskId);
    //   closeFormContainer(formContainer);
    //   showTasks(projectId);
    //   alert("Task Successfully Eliminated");
    //   return;
    // }

    // TEST:


  });

  return body;
}
