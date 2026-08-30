import formAddNewProject from "../forms/addNewProjectForm.js";
import closeForm from "../forms/closeForm.js";


export default function addCreateBtn() {
  const formContainer = document.querySelector(".form-container");
  const btn = document.createElement("button");
  btn.classList.add("btn-createProjects");
  btn.type = "button";
  btn.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
  <p>Create Project</p>`;
  btn.addEventListener("click", () => {
    formContainer.append(formAddNewProject());
    closeForm(formContainer);
  });
  return btn;
}
