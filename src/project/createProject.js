// Usuario crea nuevo proyecto:
// - LLamar funcion crear nuevo proyecto.
// - Ingresar nombre del proyecto.
// - Verificar que haya un nombre para el proyecto.
// - Almacenar Proyecto.

import Project from "./projectSkeleton.js";
import { verifyEmptyString } from "../verification/verifications.js";
import uploadElement from "../storage/uploadProject.js";

export default function createNewProject(name) {
  const verification = verifyEmptyString(name); // En la proyecto con el dom esta linea se va.
  if (verification) {
    const project = new Project(name);
    uploadElement(project);
    return "Project created";
  }
  return "Add your project name!";
}
