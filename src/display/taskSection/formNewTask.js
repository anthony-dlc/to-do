export default function formCreateTask(project) {
  const form = document.createElement("form");

  form.classList.add("form-add-new-task");

  form.innerHTML = `
  <button type="button" class="btn-close-form">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>close</title>
        <path
          d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z"
        />
      </svg>
    </button>
    <h2 class="form-header">Create New Task</h2>
    <label for="task-title">Title
      <input type="text" class="project-name task-title" id="task-title" required >
    </label>
    <label for="task-description">Description
      <input type="text" class="project-name task-description" id="task-description" required >
    </label>
    <fieldset>
      <legend>Priority</legend>
      <div class="priority-checkbox priority-container">
        <label for="low">Low
          <input type="radio" id="low" class="priority-input" value="low"  name="priority" checked/>
        </label>
        <label for="medium">Medium
          <input type="radio" id="medium" class="priority-input" value="medium" name="priority"/>
        </label>
        <label for="high">High
          <input type="radio" id="high" class="priority-input" value="high" name="priority"/>
        </label>
      </div>
    </fieldset>
    <fieldset>
      <legend>Status</legend>
      <div class="priority-checkbox status-container">
        <label for="Done">Done
          <input type="radio" id="Done" class="priority-input" value="Done"  name="status" checked/>
        </label>
        <label for="Not Done">Not Done
          <input type="radio" id="Not Done" class="priority-input" value="Not Done" name="status"/>
        </label>
      </div>
    </fieldset>
    <fieldset>
      <legend>Date</legend>
      <div class="priority-checkbox date-container">
        <label for="day">Day
          <input type="text" inputmode="numeric" pattern="[0-8]*" id="day" class="date-input"  name="date-day" checked/>
        </label>
        <label for="month">Month
          <input type="text" inputmode="numeric" pattern="[0-8]*" id="month" class="date-input" name="date-month"/>
        </label>
        <label for="year">Year
          <input type="text" inputmode="numeric" pattern="[0-8]*" id="year" class="date-input" name="date-year"/>
        </label>
      </div>
    </fieldset>
    <button type="button" class="create-task-btn formBtn">Create Task</button>`;

  return form;
}
