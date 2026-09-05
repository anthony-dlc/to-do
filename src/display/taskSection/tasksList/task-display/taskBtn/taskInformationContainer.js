export default function taskInformationContainer(task) {
  const container = document.createElement("div");
  container.classList.add("task-info-container");

  container.innerHTML = `
      <button type="button" class="btn-close-form">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>Close</title>
          <path
            d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z"
          />
        </svg>
      </button>
      <h2 class="task-info-header">Title</h2>
      <p class="task-info-content">${task.title}</p>
      <h2 class="task-info-header">Description</h2>
      <p class="task-info-content">${task.description}</p>
      <h2 class="task-info-header">Date</h2>
      <p class="task-info-content">${task.date}</p>
      <h2 class="task-info-header">Priority</h2>
      <p class="task-info-content">${task.priority}</p>
      <h2 class="task-info-header">Status</h2>
      <p class="task-info-content">${task.status}</p>
      <div class="task-info-button-container">
        <button type="button" class="task-info-btn eliminate-task-btn" data-task-id=${task.id}>Eliminate</button>
        <button type="button" class="task-info-btn edit-task-btn" data-task-id=${task.id}>Edit</button>
      </div>`;

  return container;
}
