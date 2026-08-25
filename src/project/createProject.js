// Usuario crea nuevo proyecto:
// - LLamar funcion crear nuevo proyecto.
// - Ingresar nombre del proyecto.
// - Verificar que haya un nombre para el proyecto.
// - Almacenar Proyecto.

import Project from "./projectSkeleton.js";
import { verifyEmptyString } from "../verification/verifications.js";
import uploadElement from "../storage/uploadElement.js";

export default function createProject(name) {
  verifyEmptyString(name);
  const project = new Project(name);
  uploadElement(project);
};




