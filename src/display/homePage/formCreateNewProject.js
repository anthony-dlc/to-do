export default function formAddNewProject() {
  const form = document.createElement("form");
  form.classList.add("form-style");
  form.classList.add("form-add-new-project");

  form.innerHTML = `
     <button type="button" class="btn-close-form">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>close</title>
        <path
          d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z"
        />
      </svg>
    </button>
    <h2 class="form-header">Create New Project</h2>
    <label for="project-name"
      >Project name
      <input type="text" class="project-name" id="project-name" required />
    </label>
    <button type="button" class="formBtn add-new-project formBtn">Add Project</button>`;

  return form;
}


