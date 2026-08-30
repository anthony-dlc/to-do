cosas por hacer:

cambiar el id del proyecto de random a numerico.
cuando se cree un nuevo proyecto:
visualemente ese boton hace referencia al proyecto creado pero no comparte el id
ese id sera pasado como parametro para crear una seccion que si lo va a contener
Ahi es donde se van a mostrar los proyectos.

x:
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>window-close</title><path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" /></svg>

vamos a cambiar la logica, vamos a crear un array que guarde todos los proyectos y que cada proyecto guarde sus tareas.

<!-- MANEJAR PROYECTOS -->

## proyectos:

- Crear un array y agregarlo en localStorage.

## Crear Proyecto:

- Recibir informacion/ nombre del proyecto.
- Llamar array desde localStorage.
- Agregar proyecto dentro del array.
- Agregar Array a localStorage. -> agregar array con el mismo nombre siempre

## Leer Proyecto:

- Recibir id del proyecto.
- Llamar array desde localStorage.
- Obtener indice del id del proyecto dentro del array.
- Si aparece:
  - Mostrar proyecto.
- Si no:
  - Mostrar (Proyecto no encontrado)

## Editar Proyecto:

- Recibir id y nuevo nombre.
- Llamar array desde localStorage.
- Obtener indice del id del proyecto dentro del array.
- Si aparece:
  - Cambiar nombre del proyecto.
  - Agregar Array a localStorage. -> agregar array con el mismo nombre siempre
- Si no:
  - Mostrar (Proyecto no encontrado).

## Eliminar Proyecto:

- Recibir id del proyecto.
- Llamar array desde localStorage.
- Obtener indice del id del proyecto dentro del array.
- Si aparece:
  - Eliminar Proyecto.
  - Agregar Array a localStorage. -> agregar array con el mismo nombre siempre
  - Si no:
    - Mostrar (Proyecto no encontrado).

<!-- MANEJAR TAREAS -->

## Crear Tarea:

- Recibir id del proyecto y informacion de la tarea.
- LLamar Array desde localStorage.
- Obtener indice del proyecto dentro del array.
- Si aparece:
  - Agregar tarea al proyecto.
  - Agregar el array a localStorage.
- Sino :
  - Mostrar Proyecto no encontrado.

## Leer Tarea:

- Recibir id del proyecto y id de la tarea.
- LLamar Array desde localStorage.
- Obtener indice del proyecto dentro del array.
- Si aparece:
  - Buscar indice del id de la tarea dentro del proyecto.
  - Si aparece:
    - Mostrar tarea.
  - Sino:
    - Mostrar tarea no encontrada.
- Si no:
  Mostrar proyecto no encontrado.

## Editar Tarea:

- Recibir id del proyecto, id de la tarea, propiedad de la tarea y nuevo valor.
- LLamar Array desde localStorage.
- Obtener indice del proyecto dentro del array.
- Si aparece:
  - Buscar indice del id de la tarea dentro del proyecto.
  - Si aparece:
    - Cambiar propiedad con el nuevo valor.
    - Agregar array a localStorage.
  - Sino:
    - Mostrar Tarea no encontrada.
- Sino:
  - Mostrar proyecto no encontrado.

## Eliminar Tarea:

- Recibir id del proyecto y id de la tarea.
- LLamar Array desde localStorage.
- Obtener indice del proyecto dentro del array.
- Si aparece:
  - Buscar indice del id de la tarea dentro del proyecto.
  - Si aparece:
    - Eliminar tarea del proyecto.
    - Agregar Array a localStorage.
  - Sino:
    - Mostrar tarea no encontrada.
- Sino:
  - Mostrar proyecto no encontrado.

## Que se repite?

- Proyectos:
  - Llamar array desde localStorage.
  - Obtener indice del id del proyecto dentro del array.

- Tareas:
  - LLamar Array desde localStorage.
  - Obtener indice del id del proyecto dentro del array.


