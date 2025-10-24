//aqui van las funciones helper para las tareas
import { uid } from "uid";
const id = uid(5);
const TEXT_KEY = import.meta.env.VITE_TEXT_KEY;

export const rellenarLocalStorage = (arrayTareas, tareas="Tareas") => {
    //Guardar en el localStorage en la clave
    localStorage.setItem(tareas, JSON.stringify(arrayTareas));
}

//crear una funcion llamada mostrar tareas que le pase como parametro una clave y me pinte en consola las tareas con esa clave con console.table

export const mostrarTareas = (clave = "Tareas") => {
    console.table(JSON.parse(localStorage.getItem(clave)));
}

function safeJSONParse(text) {
    try {
        if(typeof text !== "string") {
            throw new Error(`La data ${text} no es un string`);
        };
        return JSON.parse(text);
    } catch (e) {
        throw new Error("Error Parseando la data");
    }
}


export const borrarTodasLasTareas = () => {
    if(localStorage.hasOwnProperty("Tareas")){
        localStorage.removeItem("Tareas");
        localStorage.clear();
        return;
    }
}

export const getTareas = () => {
    let array = [];
    if(localStorage.hasOwnProperty("Tareas")){
        array = JSON.parse(localStorage.getItem("Tareas"));
    }
    return array;
}

export const saveTareas = (arrayTareas) => {
    try{
        if(!Array.isArray(arrayTareas)){
            throw new Error("Se esperaba un array");
        }
        // serializar --> convierto a string
        const json = JSON.stringify(arrayTareas);
        // guardar en el localStorage
        localStorage.setItem(TEXT_KEY, json);
        console.info("💾 Array guardado correctamente");
    }catch(e){
        console.error("errorrr, al realizar el alamcenamiento en el localSotrage");
    }
}

export const addTarea = (nombre) => {
    const limpio = String(nombre ?? "").trim();
    try {
        
    } catch (error) {
        
    }
    const array = getTareas();
    array.push({
        id: id,
        nombre,
        fechaCreacion: new Date(),
        completada: false
    });
    saveTareas(array);
}

export const deleteTareas = (id) => {
    if (localStorage.hasOwnProperty("Tareas")) {
        const array = getTareas();
        const nuevoArray = array.filter(tarea => tarea.id !== id);
        saveTareas(nuevoArray);
    }
}
