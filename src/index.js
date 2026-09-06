import "./styles/reset.css";
import "./styles/header.css";
import "./styles/main.css";
import "./styles/form.css";
import "./styles/section.css";

import containerEvents from "./display/containerEvents.js";
import bodyEvents from "./display/bodyEvents.js";
import documentEvents from "./documentEvents.js";

import mainContent from "./display/homePage/main.js";
import uploadElement from "./storage/uploadProject.js";
import closeFormContainer from "./display/closeFormContainer.js";
import showProjects from "./display/homePage/showProject/showProjects.js";

const storage = "projects" in localStorage;
const projectContainer = []

const body = document.querySelector("body");
const formContainer = document.querySelector(".form-container");
const container = document.querySelector(".container");

documentEvents();
bodyEvents();
containerEvents();

if (!storage) {
  uploadElement(projectContainer);
}

closeFormContainer(formContainer);

container.append(mainContent()); // MUESTRA LA PAGINA PRINCIPAL

showProjects(); // Desactivar cuando la pagina principal este disponible, // SIEMPRE ACTIVA PARA MOSTRAR LOS PROYECTOS EN EL ASIDE

