//Importaciones

import { dbTareas } from "./db/db";
import { addTarea, borrarTodasLasTareas, mostrarTareas, rellenarLocalStorage } from "./herpers/tareas";

const TEXT_KEY = import.meta.env.VITE_TEXT_KEY;





//Inicio de la aplicacion

rellenarLocalStorage(dbTareas, TEXT_KEY);
mostrarTareas(TEXT_KEY);
borrarTodasLasTareas();
addTarea("pepe");