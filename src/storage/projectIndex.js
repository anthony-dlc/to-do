import getElement from "./getElement.js";

export default function getProjectIndex(id) {
  const projectContainer = getElement("projects");
  const project = projectContainer.findIndex((p) => p.id === id);

  return project;
}
