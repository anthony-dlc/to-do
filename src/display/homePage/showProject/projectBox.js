export default function projectBtn(project) {
  const btn = document.createElement("button");

  btn.dataset.projectId = project.id;
  btn.innerHTML = `
  <p>${project.name}</p>`
  btn.classList.add("project-card");
  return btn;
}
