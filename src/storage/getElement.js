export default function getElement(arr) {
  const projectContainer = localStorage.getItem(arr);
  return JSON.parse(projectContainer);
}
