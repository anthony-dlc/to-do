import { verifyEmptyString } from "../../verification/verifications.js";
import closeForm from "./closeForm.js";
import createNewProject from "../../project/createProject.js";
import showProject from "../showProjects.js";

export default function formAddNewProject() {
  const form = document.createElement("form");
  form.classList.add("form-add-new-project");

  form.append(btnCloseForm());
  form.append(formHeader());
  form.append(formInput());
  form.append(addProjectBtn());

  return form;
}

function formHeader() {
  const header = document.createElement("h2");
  header.textContent = "Create New Project";

  return header;
}

function formInput() {
  const formLabel = document.createElement("label");
  formLabel.innerHTML = `
  Project Name
  <input type="text" class="project-name" id="project-name" required >`;
  return formLabel;
}

function addProjectBtn() {
  const btn = document.createElement("button");
  btn.classList.add("add-new-project");
  btn.textContent = "Add Project";
  btn.type = "button";

  btn.addEventListener("click", () => {
    const input = document.querySelector(".project-name");
    const verification = verifyEmptyString(input.value);
    if (verification) {
      createNewProject(input.value);
      // input.value = "";
      // showProject();
      return;
    }
    alert("Add Project Name");
    return;
  });

  return btn;
}

function btnCloseForm() {
  const formContainer = document.querySelector(".form-container");
  const btn = document.createElement("button");
  btn.classList.add("btn-close-form");
  btn.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>window-close</title><path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" /></svg>`;

  btn.addEventListener("click", () => {
    formContainer.textContent = "";
    closeForm(formContainer);
  });

  return btn;
}


