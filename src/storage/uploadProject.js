export default function uploadElement(element) {
  localStorage.setItem(element.id, JSON.stringify(element));
}
