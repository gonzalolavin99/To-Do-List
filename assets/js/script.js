const inputTareas = document.querySelector('#nuevasTareas');
const btnAgregar = document.querySelector('#agregarTareas');
const bodyTable = document.querySelector('tbody');
let ultimoID = 3;
const tareas = [
    { id: 1, nombreTarea: "Limpiar la cocina", completada: false },
    { id: 2, nombreTarea: "Comprar pan", completada: false },
    { id: 3, nombreTarea: "Pasear al perro", completada: false }
];
const cuentaTareas = document.querySelector('#cuenta-tareas');
const tareasRealizadas = document.querySelector('#tareasRealizadas');


renderTareas();

function renderTareas() {
    let html = "";
    let tareasCompletadas = 0;

    for (let tarea of tareas) {
        html += `<tr${tarea.completada ? ' style="background-color: #4CAF50;"' : ''}>
            <td>${tarea.id}</td>
            <td>${tarea.nombreTarea}</td>
            <td>
                <input type="checkbox" id="checkbox" name="checkbox" ${tarea.completada ? 'checked' : ''} onchange="marcarTarea(${tarea.id})">
                <i class="fas fa-square-xmark" style="color: #d71919;" onclick="borrarTareas(${tarea.id})"></i>
            </td>
        </tr>`;

        if (tarea.completada) {
            tareasCompletadas++;
        }
    }

    bodyTable.innerHTML = html;
    cuentaTareas.textContent = "Tareas: " + tareas.length;
    tareasRealizadas.textContent = "Tareas Realizadas: " + tareasCompletadas;
}

btnAgregar.addEventListener("click", () => {
    agregarTarea();
});

inputTareas.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        agregarTarea();
    }
});

function agregarTarea() {
    const tareaNueva = inputTareas.value;
    tareas.push({ id: ++ultimoID, nombreTarea: tareaNueva, completada: false });
    inputTareas.value = "";
    renderTareas();
}

function borrarTareas(id) {
    const index = tareas.findIndex((ele) => ele.id === id);
    tareas.splice(index, 1);
    renderTareas();
}

function marcarTarea(id) {
    const tarea = tareas.find((ele) => ele.id === id);
    if (tarea) {
        tarea.completada = !tarea.completada;
        renderTareas();
    }
}
