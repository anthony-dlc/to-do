import closeFormContainer from "./closeFormContainer.js";
import formAddNewProject from "./homePage/formCreateNewProject.js";
import taskSection from "./taskSection/section.js";
import mainContent from "./homePage/main.js";
import showProjects from "./homePage/showProject/showProjects.js";
import eliminateProject from "../project/eliminateProject.js";
import formChangeProjectName from "./taskSection/formChangeProjectName.js";
import formCreateTask from "./taskSection/formNewTask.js";
import showTasks from "./taskSection/tasksList/showTasks.js";
import taskInformationContainer from "./taskSection/tasksList/task-display/taskBtn/taskInformationContainer.js";
// import getElement from "../storage/getElement.js";
// import readProject from "../project/readProject.js";
import readTask from "../task/readTask.js";
import eliminateTask from "../task/eliminateTask.js";

export default function containerEvents() {
  const container = document.querySelector(".container");

  container.addEventListener("click", (e) => {
    // LLAMAR FORMULARIO PARA AGREGAR UN NUEVO PROJECT:

    const formContainer = document.querySelector(".form-container");
    const btnCallFormNewProject = e.target.closest(".call-form-new-project");
    if (btnCallFormNewProject) {
      formContainer.innerHTML = "";
      formContainer.append(formAddNewProject());
      closeFormContainer(formContainer);
      return;
    }

    // LLAMAR LA SECCION AL PRESIONAR UN CARD BUTTON:

    const projectCard = e.target.closest(".project-card");
    if (projectCard) {
      const id = projectCard.dataset.projectId;
      container.innerHTML = "";
      container.append(taskSection(id));
      showTasks(id);
      return;
    }

    // BOTON PARA VOLVER A LA PAGINA PRINCIPAL:

    const btnBackToHomePage = e.target.closest(".btn-back");
    if (btnBackToHomePage) {
      container.innerHTML = "";
      container.append(mainContent());
      showProjects();
      return;
    }

    // BOTON QUE LLAMA LA LISTA DE LOS DOS BOTONES DE INFORMACION DEL PROJECT:

    const btnInfoProjectList = e.target.closest(".info-project-button");
    if (btnInfoProjectList) {
      const list = document.querySelector(".project-info-list");
      e.stopPropagation();
      closeFormContainer(list);
      return;
    }

    // BOTON ELIMINAR PROYECTO:

    const btnEliminateProject = e.target.closest(".btn-eliminate-project");
    if (btnEliminateProject) {
      const section = document.querySelector("section");
      const id = section.dataset.projectId;
      eliminateProject(id);
      alert("Project successfully Eliminated");
      container.innerHTML = "";
      container.append(mainContent());
      showProjects();
      return;
    }

    // BOTON LLAMA FORMULARIO PARA EDIT PROJECT NAME:

    const btnCallFormEditProjectName = e.target.closest(".btn-edit-project");
    if (btnCallFormEditProjectName) {
      formContainer.innerHTML = "";
      formContainer.append(formChangeProjectName());
      closeFormContainer(formContainer);
      return;
    }

    // BOTON LLAMAR FORMULARIO PARA CREAR UNA NUEVA TASK:

    const btnCallFormCreateTask = e.target.closest(".call-form-new-task");
    if (btnCallFormCreateTask) {
      formContainer.innerHTML = "";
      formContainer.append(formCreateTask());
      closeFormContainer(formContainer);
    }

    // BOTON LLAMAR INFORMACION DE LA TAREA:

    const btnCallTaskInfo = e.target.closest(".task-btn");
    if (btnCallTaskInfo) {
      const section = document.querySelector("section");
      const projectId = section.dataset.projectId;
      const taskId = btnCallTaskInfo.dataset.taskId;
      const task = readTask(projectId, taskId);
      console.log(task);
      formContainer.innerHTML = "";
      formContainer.append(taskInformationContainer(task));
      closeFormContainer(formContainer);
    }
  });

  return container;
}
