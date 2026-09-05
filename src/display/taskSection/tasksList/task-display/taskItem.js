export default function taskItem(task) {
  const li = document.createElement("li");
  li.classList.add("taskList");
  li.innerHTML = `
  <button type="button" class="task-btn" data-task-id=${task.id}>${task.title}</button>
  <button type="button" class="task-info eliminate-task-btn" data-task-id=${task.id}>
   Eliminate
  </button>
    <button type="button" class="task-info edit-task-btn" data-task-id=${task.id}>
   Edit
  </button>
  `;

  return li;
}
