const inputTareas = document.querySelector('#nuevasTareas');
const btnAgregar = document.querySelector('#agregarTareas');
const bodyTable = document.querySelector('tbody');
let ultimoID = 0;
const tareas = [];


function renderTareas (){
    let html = "";
    for (let tarea of tareas){
        html+= `<tr> 
        <td>${tarea.id}</td>
        <td>${tarea.nombreTarea}</td>
        <td><input type="checkbox" id="checkbox" name="checkbox"></td>
        </>`
    }
    bodyTable.innerHTML= html;
}
btnAgregar.addEventListener("click", ()=>{
    const tareaNueva = inputTareas.value;
    tareas.push({id: ++ultimoID, nombreTarea:tareaNueva});
    inputTareas.value="";
    renderTareas();
})
 