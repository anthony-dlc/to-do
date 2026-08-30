import addCreateBtn from "./btnCreateProject.js";

export default function aside() {
  const asideElement = document.createElement("aside");
  asideElement.append(asideHeader());


  asideElement.append(projectContainer());


  return asideElement;
}

function asideHeader() {
  const header = document.createElement("h2");
  header.textContent = "Projects";
  return header;
}

function projectContainer() {
  const container = document.createElement("div");
  container.classList.add("projects-container");
  container.append(addCreateBtn());
  return container;
}


