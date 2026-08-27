// recibir id
// verificar que no este vacio
// buscar elemento el localstorage
// mostrar elemento

import { verifyEmptyString } from "../verification/verifications.js";
import getElement from "../storage/getElement.js";

export default function readProject(id) {
  const verifyElementId = verifyEmptyString(id); // En la proyecto con el dom esta linea se va.
  if (verifyElementId) {
    const project = getElement(id);
    return project;
  }
  return "Insert an Id";
}
