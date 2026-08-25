# 1 - DEFINIR EL PROBLEMA EN UNA FRASE:

1.	Que hace el sistema?

- vamos a crear un sistema de administracion de tareas o ToDo app en el cual puedes crear,editar y eliminar proyectos y dentro de los mismos crear, editar, eliminar y leer tareas.

2.	Para quien?

- Este proyecto es para mi ya que me ayudaria a organizar mis tareas diarias de una manera mas estructurada y simple.

3.	Que problema resuelve?

- Me ayudaria a organizar mi vida y optimizar mi tiempo ya que al organizar mis tasks no perderia tiempo pensando en la siguiente tarea.


# 2 - IDENTIFICAR LAS ENTIDADES (LOS "SUSTANTIVOS"):

1.	Lista los objetos del mundo real que el sistema maneja.

- Proyecto
- Tarea


# 3 - DEFINIR ATRIBUTOS DE CADA ENTIDAD:

1.	Para cada entidad: 
  a.	Que datos tiene?
  i.	Ex: Nombre, Fecha, Estado, Cantidad, Relación con otras entidades.

- Proyecto: 
  - nombre.
  - Id.
  - Lista de tareas.

- Tarea: 
  - Id.
  - titulo.
  - descripcion.
  - fecha.
  - prioridad.
  - status.

# 4 - DEFINIR COMPORTAMIENTO (LOS "VERBOS"):

1.	Que acciones puede hacer o recibir cada entidad?

- El sistema puede:

  - Proyecto:
    - Crear.
    - Editar.
    - Eliminar.

  - Tarea:
    - Crear.
    - Editar.
    - Eliminar.
    - Mostrar.

# 5 - MAPEAR RELACIONES ENTRE ENTIDADES:

1.	Una entidad tiene muchas de otra (uno o muchos)? 

- Aqui utilizare composicion osea, cada entidad solo sabe lo que tiene que saber:
  - Proyecto: solo conserva sus datos.
  - Crear Proyecto: solo crea y retorna un proyecto.
  - Guardar Proyecto: Recibe y guarda un Proyecto.
  "Asi sucesivamente con cada entidad" solo se entera de lo que sabe hacer.

2.	Hay herencia real ( Comparten comportamiento -> clase base) o es mejor composición?
  - Composicion sobre todo.

3.	Que entidad depende de cual?

  - cada entidad depende de si misma y la informacion que se le pase.

# 6 - DEFINIR EL FLUJO DE DATOS:

1.	Como entra la información (Formulario, import, api)?

  - En consola entrara manual, pues solo es prueba, pero una vez se cree en pantalla, se recivira la informacion a traves de un formulario.

2.	Como se persite(localStorage, base de datos, archivo)?
  - Los datos principalmente seran gestionado a traves de console, pero tambien seran guardados en localStorage.

3.	Cuando se guarda: cada acción, o al final de una secion?
- siempre que el usuario cumpla con una accion especifica ya sea crear editar o eliminar un proyecto o tarea simplemente si cumple con las condiciones al final de cada ejecucion.


# 7 - ESCRIBIR LOS CASOS DE USO PRINCIPALES:

1.	“Usuario hace x” -> que pasa paso a paso, que clase/métodos se llaman en que orden. 3-5 casos de uso bien definidos cubren la mayoría de la lógica real.

Usuario crea nuevo proyecto:✅
  - LLamar funcion crear nuevo proyecto.
  - Ingresar nombre del proyecto.
  - Verificar que haya un nombre para el proyecto.
  - Almacenar Proyecto.

Usuario edita proyecto(nombre):✅
  - Obtener id y nuevo nombre del proyecto.
  - Buscar proyecto por id en el almacen. busca y verifica, si existe retorna el objeto sino retorna error.
  - Cambiar nombre del proyecto.
  - Almacenar proyecto.

Usuario Elimina proyecto:
  - Obtener id del proyecto.
  - Buscar proyecto por id en el almacen .busca y verifica, si existe elimina el objeto sino retorna error.
  - Eliminar proyecto del almacen.

Usuario Crea una tarea:
  - Obtener id del proyecto.
  - Buscar y retornar proyecto. function factory: primero pasamos la informacion del padre y luego la del hijo. primero buscamos al padre y despues agregamos al hijo.
  - Recibir informacion de la task
  - verificar que todos los campos esten llenos.
  - guardar tarea en su proyecto.
  - almacenar proyecto.


Usuario Edita una tarea:
  - Obtener id del proyecto.
  - Buscar y retornar proyecto. function factory: primero pasar la informacion del padre y luego la del hijo. primero buscar al padre y despues agregar al hijo.
  - recibir id, propiedad y valor del hijo:
  - recorrer al padre y buscar con el id del hijo y lo retornar al hijo.
  - cambiar propiedad y valor.
  - agregar hijo al padre
  - almacenar padre.

Usuario Elimina una tarea:
   - Obtener id del proyecto.
  - Buscar y retornar proyecto. function factory: primero pasar la informacion del padre y luego la del hijo. primero buscar al padre y despues agregar al hijo.
  - recibir id
  - recorrer al padre y buscar con el id del hijo y lo retornar al hijo.
  - eliminar hijo dentro del padre.
  - almacenar padre.

# 8 - IDENTIFICAR CASOS LIMITE:

1.	Que pasa si se repite una acción? Si se borra algo que tiene dependencias? Si un dato falta o es invalido?

# 9 - ESCRIBIR CODIGO:

Con 1-8 resueltos en papel o markdown, ya tienes el mapa completo. Aquí es donde tiene sentido delegar en una ia la implementación de piezas especificas – porque ya sabes exactamente que  necesitas y puedes verificar si el resultado es correcto.

Nota de uso:
Este framework funciona mejor cuando cada paso se resuelve antes de avanzar al siguiente.