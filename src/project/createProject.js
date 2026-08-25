// Usuario crea nuevo proyecto:
// - LLamar funcion crear nuevo proyecto.
// - Ingresar nombre del proyecto.
// - Verificar que haya un nombre para el proyecto.
// - Almacenar Proyecto.

import Project from "./projectSkeleton.js";
import { verifyEmptyString } from "../verification/verifications.js";
import uploadElement from "../storage/uploadElement.js";

export default function createNewProject(name) {
  const verification = verifyEmptyString(name);
  if (verification) {
    const project = new Project(name);
    uploadElement(project);
    return "Project created";
  }
   return "Add your project name!";
}

// console.log(createProject("Naomi"))
localStorage.removeItem("b78f3fdc-464c-498e-8e41-f2127d56a6ee")
