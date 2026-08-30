// - Recibir id del proyecto.
// - Llamar array desde localStorage.
// - Obtener indice del id del proyecto dentro del array.
// - Si aparece:
//   - Mostrar proyecto.
// - Si no:
//   - Mostrar (Proyecto no encontrado)

import { verifyEmptyString } from "../verification/verifications.js";
import getElement from "../storage/getElement.js";
import getProjectIndex from "../storage/projectIndex.js";

export default function readProject(id) {
  const projectContainer = getElement("projects");
  const verifyElementId = verifyEmptyString(id);
  if (verifyElementId) {
    const projectIndex = getProjectIndex(id);
    if (projectIndex !== -1) {
      const project = projectContainer[projectIndex];
      console.log(project);
      return project;
    }
    console.log("Project not found");
    return;
  }
  console.log("Insert an Id");
  return "Insert an Id";
}
