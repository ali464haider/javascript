var listaProyectos = [];
onload = () => {
    cargarProyectos();
    mostrarProyectos(listaProyectos);
}

function cargarProyectos() {

    listaProyectos.push(new Proyecto(100,"ZProyecto Iberdrola", "proyecto.jpeg"));

    listaProyectos.push(new Proyecto( 200,"Proyecto Iberdrola","proyecto.jpeg"));

}

function mostrarProyectos(lista) {
    var divCentral = document.getElementById("central");
    divCentral.innerHTML = "<h1>PROYECTOS</h1><table><tbody></tbody></table>";
    var tbody = divCentral.getElementsByTagName("tbody")[0];
    lista.forEach((proyecto) => {
        tbody.innerHTML += `<tr>
                            <td>${proyecto.idProyecto}</td>
                            <td>${proyecto.nombre}</td>
                            <td><img class="imageTable" src="${proyecto.imagen}"></td></tr>`;
    });
}

function ordenar() {
    listaProyectos.sort((a,b) =>{
        if(a.nombre > b.nombre){
            return 1;
        }else{
            return -1;
        }});
    mostrarProyectos(listaProyectos);
}

function imprimir() {
    window.print();
}

function cancelar() {
    location.href = "aterrizaje.html";
}

function crearProyecto(){
    var divCentral=document.getElementById('central');
    if(!document.getElementById('proyectoForm')){
        var div=document.createElement('div');
        div.id="proyectoForm";
        divCentral.appendChild(div);
        crearForm(div);
        crearbotones(div);
    }
  
}

function cancelarProyecto(){
    var divForm=document.getElementById('proyectoForm');
    document.getElementById('central').removeChild(divForm);
}

function crearForm(div){
    var form=document.createElement('form');
    form.setAttribute("method","post");
    form.setAttribute("action","#");
    var input=document.createElement('input');
    input.setAttribute("type","text");
    input.setAttribute("id","texto1");
    input.setAttribute("placeholder","Escribe el nombre empleado");
    var input1=document.createElement('input');
    input1.setAttribute("type","text");
    input1.setAttribute("id","texto2");
    input1.setAttribute("placeholder","Escribe el nombre deartamento");
    form.appendChild(input);
    form.appendChild(input1);
    div.appendChild(form);

}


function crearbotones(div){
    var boton=document.createElement('button')
    boton.setAttribute("type","button");
    boton.id="btn1";
    boton.innerHTML="Aceptar";
    boton.setAttribute("onclick","agregarProyecto()");
    var boton1=document.createElement('button')
    boton1.setAttribute("type","button");
    boton1.id="btn2";
    boton1.innerHTML="Cancelar";
    boton1.setAttribute("onclick","cancelarProyecto()");
    div.appendChild(boton);
    div.appendChild(boton1);
}

function agregarProyecto(){
    var input=document.getElementById('texto1');
    var input1=document.getElementById('texto2');
    listaProyectos.push(new Proyecto(input.value,input1.value));

    alert("Proyecto Agregado.");
    mostrarProyectos(listaProyectos);
}

function filtrar(){
    var bsucarnombre=document.getElementById('buscar');
    listaProyectosfiltrado=listaProyectos.filter(proyecto=> proyecto.nombre==bsucarnombre.value);
    mostrarProyectos(listaProyectosfiltrado);
}


