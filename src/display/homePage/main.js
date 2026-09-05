export default function mainContent() {
  const mainElement = document.createElement("main");
  mainElement.innerHTML = `
      <h1>Projects</h1>
      <button type="button" class="btn-create call-form-new-project">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>Create Project</title>
          <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
        </svg>
        <p>Create Project</p>
      </button>
      <div class="project-container"></div>
  `;

  return mainElement;
}
