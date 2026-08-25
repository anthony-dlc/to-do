// recibir id
// verificar que no este vacio
// buscar elemento el localstorage
// mostrar elemento

import { verifyEmptyString } from "../verification/verifications.js";
import getElement from "../storage/findElement.js";

export default function readProject(id) {
  const verifyElementId = verifyEmptyString(id);
  if (verifyElementId) {
    const project = getElement(id);
    const projectParsed = JSON.parse(project);
    return projectParsed;
  }
  return "Insert an Id";
}
