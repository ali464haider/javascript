var listaProyectos = [];
onload = () => {
    cargarProyectos();
    mostrarProyectos(listaProyectos);
}

function cargarProyectos() {

    listaProyectos.push(new Proyecto("1", "1", "ZProyecto Iberdrola", "", "", "cambio de la web Institucional", "", "proyecto.jpeg"));

    listaProyectos.push(new Proyecto("1", "1", "Proyecto Iberdrola", "", "", "cambio de la web Institucional", "", "proyecto.jpeg"));

}

function mostrarProyectos(lista) {
    var divCentral = document.getElementById("central");
    divCentral.innerHTML = "<h1>PROYECTOS</h1><table><tbody></tbody></table>";
    var tbody = divCentral.getElementsByTagName("tbody")[0];
    lista.forEach((proyecto) => {
        tbody.innerHTML += `<tr>
                            <td>${proyecto.idProyecto}</td>
                            <td>${proyecto.idCliente}</td>
                            <td>${proyecto.nombre}</td>
                            <td>${proyecto.mostrarfechaInicio()}</td>
                            <td>${proyecto.mostrarfechaFin()}</td>
                            <td>${proyecto.Descripcion}</td>
                            <td>${proyecto.estado}</td>
                            <td><img class="imageTable" src="${proyecto.imagen}"></td></tr>`;
    });
}

function ordenar() {
    listaProyectos.sort(a,b =>{
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

