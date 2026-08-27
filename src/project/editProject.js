// Usuario edita proyecto(nombre):
//   - Obtener id y nuevo nombre del proyecto.
//   - Buscar proyecto por id en el almacen. busca y verifica, si existe retorna el objeto sino retorna error.
//   - Cambiar nombre del proyecto.
//   - Almacenar proyecto.

// pasar id para buscar el elemento dentro del Almacen, verificar si se ingreso un id y un nombre, buscar ese elemento por id, acceder a su nombre y cambiarlo.
import {
  verifyEmptyString,
  verifyNullValues,
} from "../verification/verifications.js";
import getElement from "../storage/getElement.js";
import uploadElement from "../storage/uploadProject.js";

export default function editProjectName(id, name) {
  const verifyId = verifyEmptyString(id); // En la proyecto con el dom esta linea se va.
  const verifyName = verifyEmptyString(name); // En la proyecto con el dom esta linea se va.
  if (verifyId && verifyName) {
    const project = getElement(id);
    if (verifyNullValues(project)) {
      project.name = name;
      uploadElement(project);
      return;
    }
    return "Project not found!";
  }
  return "Fill both campus";
}
