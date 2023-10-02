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
        <td>
        <td>
        <input type="checkbox" id="checkbox" name="checkbox">
        <i class="fas fa-square-xmark" style="color: #d71919;" onclick="borrarTareas(${tarea.id})"></i>
    </td>
    
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
function borrarTareas(id){
    const  index = tareas.findIndex((ele)=> ele.id ===id);
   tareas.splice(index,1);
   renderTareas();
}

