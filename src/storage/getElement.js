export default function getElement(id) {
  const element = localStorage.getItem(id);
  return JSON.parse(element);
}
