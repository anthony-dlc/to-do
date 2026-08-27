// Usuario Elimina proyecto:
//   - Obtener id del proyecto.
//   - Buscar proyecto por id en el almacen .busca y verifica, si existe elimina el objeto sino retorna error.
//   - Eliminar proyecto del almacen.

import { verifyEmptyString } from "../verification/verifications.js";
import eliminateElement from "../storage/eliminateElement.js";

export default function eliminateProject(id) {
  const verifyElementId = verifyEmptyString(id); // En la proyecto con el dom esta linea se va.
  if (verifyElementId) {
    eliminateElement(id);
    return;
  }
  return "Insert an ID"; // false
}
