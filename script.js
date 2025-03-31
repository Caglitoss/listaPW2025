const listaTareas = document.getElementById("listaTarea");
const tareaInput = document.getElementById("tareaInput");

function agregarTarea() {
    const tareaTexto = tareaInput.value.trim();

    const tarea = {
        id: Date.now(),
        texto: tareaTexto
    };
    // Crear un elemento de lista 
    const tareaItem = document.createElement('li');
    tareaItem.className = "tarea-item";
    tareaItem.id = tarea.id;

    // Crear Span
    const tareaSpan = document.createElement('span');
    tareaSpan.textContent = tarea.texto;

    // Crear boton eliminar
    const eliminarTarea = document.createElement('button')
    eliminarTarea.textContent = 'Eliminar';
    eliminarTarea.onclick = function () {
        listaTareas.removeChild(tareaItem)
    };

    tareaItem.appendChild(tareaSpan);

    tareaItem.appendChild(eliminarTarea);

    listaTareas.appendChild(tareaItem);

    guardarTareas()

}

function guardarTareas() {
    const tareas = [];
    document.querySelectorAll('.tarea-item').forEach(
        item => {
            const tarea = {
                id: item.id,
                texto: item.querySelector('span').textContent
            };
            tareas.push(tarea);
        }
    );
    localStorage.setItem('tareas', JSON.stringify(tareas));
    console.log(localStorage);
}

// Para la proxima clase

document.addEventListener('DOMContentLoaded', cargarTareas);

function cargarTareas() {
    // Si no existe el localStorage se debe poner un arreglo vacio
    const tareas = JSON.parse(localStorage.getItem('tareas')) || [];

    tareas.forEach(
        tarea => {
            const tareaItem = document.createElement('li');
            tareaItem.className = 'tarea-item';
            const tareaSpan = document.createElement('span');
            tareaSpan.textContent = tarea.texto;
            tareaItem.appendChild(tareaSpan);
            listaTareas.appendChild(tareaItem);

            const eliminarTarea = document.createElement('button')
            eliminarTarea.textContent = 'Eliminar';
            eliminarTarea.onclick = function () {
                listaTareas.removeChild(tareaItem)
            };
            tareaItem.appendChild(eliminarTarea);


        }
    );
}
