import getElement from "./getElement.js";

export default function getProjectIndex(arr,id) {
  const project = arr.findIndex((p) => p.id === id);

  return project;
}
