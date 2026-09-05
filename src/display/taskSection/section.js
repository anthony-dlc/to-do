import readProject from "../../project/readProject.js";
import showTasks from "./tasksList/showTasks.js";

export default function taskSection(projectId) {
  const prt = readProject(projectId);
  if (prt) {
    const section = document.createElement("section");
    section.dataset.projectId = prt.id;

    section.innerHTML = `
      <button type="button" class="btn-back project-page-btns">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>Back</title>
          <path
            d="M21,11H6.83L10.41,7.41L9,6L3,12L9,18L10.41,16.58L6.83,13H21V11Z"
          />
        </svg>
      </button>
      <button type="button" class="info-project-button project-page-btns">      
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>Project Info</title>
          <path
            d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"
          />
        </svg>
        
      </button>
      <ul class="project-info-list info-list hidden">
        <li> 
          <button type="button" class="btn-eliminate-project project-btns-info">Eliminate project</button>
        </li>
        <li> 
          <button type="button" class="btn-edit-project project-btns-info">Edit Project Name</button>
        </li>
      </ul>
      <h1>${prt.name}</h1>
      <button type="button" class="btn-create call-form-new-task">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>Create Project</title>
          <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
        </svg>
        <p>Create Task</p>
      </button>
      <ul class="task-container"></ul>
      `;
    // showTasks(project);
    return section;
  }
}
