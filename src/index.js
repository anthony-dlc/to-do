// import "./styles/reset.css";
// import "./styles/header.css";
// import "./styles/aside.css";
// import "./styles/form.css";

// import closeForm from "./display/forms/closeForm.js";
// import aside from "./display/aside/aside.js";
// import formAddNewProject from "./display/forms/addNewProjectForm.js";
// import showProject from "./display/showProjects.js";

// // import addCreateBtn from "./display/aside/btnCreateProject.js"; // borrar

// const body = document.querySelector("body");
// const formContainer = document.querySelector(".form-container");
// const container = document.querySelector(".container");

// closeForm(formContainer);

// container.append(aside());

// // formContainer.append(formAddNewProject());

// const project = document.querySelector(".projects-container"); // borrar
// // project.append(showProject());

// // project.append(addCreateBtn()); // borrar
// // project.append(addCreateBtn()); // borrar
// // project.append(addCreateBtn()); // borrar
// // project.append(addCreateBtn()); // borrar
// // project.append(addCreateBtn()); // borrar

// ############################# LOGICA NUEVA ##############################

import createNewProject from "./project/createProject.js"; // Project Crud
import readProject from "./project/readProject.js"; // Project Crud
import editProjectName from "./project/editProject.js"; // Project Crud
import eliminateProject from "./project/eliminateProject.js"; // Project Crud

import createNewTask from "./task/createTask.js"; // Task Crud
import readTask from "./task/readTask.js";



import uploadElement from "./storage/uploadProject.js"; // Storage
import getElement from "./storage/getElement.js"; // Storage

// eliminateProject('b6276cb5-d6d7-44d7-91de-f06454a739f5')
