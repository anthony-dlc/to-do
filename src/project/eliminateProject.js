// ## Eliminar Proyecto:

// - Recibir id del proyecto.
// - Llamar array desde localStorage.
// - Obtener indice del id del proyecto dentro del array.
// - Si aparece:
//   - Eliminar Proyecto.
//   - Agregar Array a localStorage. -> agregar array con el mismo nombre siempre
//   - Si no:
//     - Mostrar (Proyecto no encontrado).

import { verifyEmptyString } from "../verification/verifications.js";
import getElement from "../storage/getElement.js";
import getProjectIndex from "../storage/projectIndex.js";
import uploadElement from "../storage/uploadProject.js";

export default function eliminateProject(id) {
  const projectContainer = getElement("projects");
  const verifyElementId = verifyEmptyString(id); // En la proyecto con el dom esta linea se va.
  if (verifyElementId) {
    const projectIndex = getProjectIndex(projectContainer,id);
    if (projectIndex !== -1) {
      projectContainer.splice(projectIndex, 1);
      uploadElement(projectContainer);
      console.log("Project ");
    }
    console.log("Project not found");
    return;
  }
  return "Insert an ID"; // false
}
