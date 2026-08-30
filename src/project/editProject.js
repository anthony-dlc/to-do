// - Recibir id y nuevo nombre.
// - Llamar array desde localStorage.
// - Obtener indice del id del proyecto dentro del array.
// - Si aparece:
//   - Cambiar nombre del proyecto.
//   - Agregar Array a localStorage. -> agregar array con el mismo nombre siempre
// - Si no:
//   - Mostrar (Proyecto no encontrado).

import {
  verifyEmptyString,
  verifyNullValues,
} from "../verification/verifications.js";
import getElement from "../storage/getElement.js";
import uploadElement from "../storage/uploadProject.js";
import getProjectIndex from "../storage/projectIndex.js";

export default function editProjectName(id, name) {
  const projectContainer = getElement("projects");
  const verifyId = verifyEmptyString(id); // En la proyecto con el dom esta linea se va.
  const verifyName = verifyEmptyString(name); // En la proyecto con el dom esta linea se va.
  if (verifyId && verifyName) {
    const projectIndex = getProjectIndex(id);
    if (projectIndex !== -1) {
      projectContainer[projectIndex].name = name;
      uploadElement(projectContainer);
      console.log("Project name changed");
      return;
    }
    console.log("Project not found");
    return;
  }
  console.log("Fill both campus");
  return "Fill both campus";
}
