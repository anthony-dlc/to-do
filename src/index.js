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

// localStorage.setItem("projects", JSON.stringify([]))

import createNewProject from "./project/createProject.js"; // Project Crud
import readProject from "./project/readProject.js"; // Project Crud
import editProjectName from "./project/editProject.js"; // Project Crud
import eliminateProject from "./project/eliminateProject.js"; // Project Crud

import createNewTask from "./task/createTask.js"; // Task Crud
import readTask from "./task/readTask.js"; // Task Crud
import editTask from "./task/editTask.js"; // Task Crud
import eliminateTask from "./task/eliminateTask.js"; // Task Crud

import uploadElement from "./storage/uploadProject.js"; // Storage
import getElement from "./storage/getElement.js"; // Storage



// eliminateTask(
// "bc4857c5-f46b-46de-a582-798e12aea521","cc691a84-0f32-4575-b9ec-ebf00a23cad8")

const task01 = ["Homework","Do Homework","23/08","High","Not done"];
const task02 = ["Workout","Functional workout","23/08","High","Done"];


// createNewTask("d04f4cfb-de71-4f0d-9f8f-c40e9479b184",task02)



