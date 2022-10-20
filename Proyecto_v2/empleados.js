var listaEmpleados = [];
onload = () => {
    cargarEmpleados();
    mostrarEmpleados(listaEmpleados);
}

function cargarEmpleados() {



    listaEmpleados.push(new Empleado("Sergio", "Gaitan", 2, 2300, 200));

    listaEmpleados.push(new Empleado("Alejandro", "Cabrera", 3, 2300, 300));

    listaEmpleados.push(new Empleado("Ali", "Haider", 1, 2300, 100));

}

function mostrarEmpleados(lista) {
    var divCentral = document.getElementById("central");
    divCentral.innerHTML = "<h1>EMPLEADOS</h1><table><tbody></tbody></table>";
    var tbody = divCentral.getElementsByTagName("tbody")[0];
    lista.forEach((empleado) => {
        tbody.innerHTML += `<tr>
                            <td>${empleado.nombre}</td>
                            <td>${empleado.apellido}</td>
                            <td>${empleado.id}</td>
                            <td>${empleado.salario}</td>
                            <td>${empleado.nrodep}</td>
                            <td><input type="checkbox" name="eliminar" class="eliminarEmp" value="${empleado.nombre}"></td>
                            </tr>`
    });
}

function ordenar() {
    listaEmpleados.sort((a, b) => {
        if (a.nombre > b.nombre) {
            return 1;
        } else {
            return -1;
        }
    });
    mostrarEmpleados(listaEmpleados);
}

function imprimir() {
    window.print();
}

function cancelar() {
    location.href = "aterrizaje.html";
}

function habilitarPopup() {
    var proyectoForm = document.getElementById('proyectoForm');
    proyectoForm.classList.add('active');
}

function nuevoEmpleado() {
    var divCentral = document.getElementById('central');
    if (!document.getElementById('proyectoForm')) {
        var div = document.createElement('div');
        div.id = "proyectoForm";
        divCentral.appendChild(div);
        crearForm(div);
        crearbotones(div);
    }

}
var listaEmpleadosEliminar = [];
function eliminarEmpleado() {
    var input = document.getElementsByClassName('eliminarEmp');
    for (let i = 0; i < input.length; i++) {
        let posicioneliminar = 0;
        if (input[i].checked) {
            listaEmpleadosEliminar.push([input[i].value]);
            listaEmpleados.splice(posicioneliminar, 1);

        }
        console.log(listaEmpleadosEliminar);
        mostrarEmpleados(listaEmpleados);

    }

}

function cancelarAgregarEmpleado() {
    var divForm = document.getElementById('proyectoForm');
    document.getElementById('central').removeChild(divForm);
}

function crearForm(div) {
    var form = document.createElement('form');
    form.setAttribute("method", "post");
    form.setAttribute("action", "#");
    var input = document.createElement('input');
    input.setAttribute("type", "text");
    input.setAttribute("id", "texto1");
    input.setAttribute("placeholder", "Escribe el nombre empleado");
    var input1 = document.createElement('input');
    input1.setAttribute("type", "text");
    input1.setAttribute("id", "texto2");
    input1.setAttribute("placeholder", "Escribe el apellido empleado");
    var input2 = document.createElement('input');
    input2.setAttribute("type", "text");
    input2.setAttribute("id", "texto3");
    input2.setAttribute("placeholder", "Escribe el id apellido");
    var input3 = document.createElement('input');
    input3.setAttribute("type", "text");
    input3.setAttribute("id", "texto4");
    input3.setAttribute("placeholder", "Escribe el salario empleado");
    var input4 = document.createElement('input');
    input4.setAttribute("type", "text");
    input4.setAttribute("id", "texto5");
    input4.setAttribute("placeholder", "Escribe el numero departamento empleado");

    form.appendChild(input);
    form.appendChild(input1);
    form.appendChild(input2);
    form.appendChild(input3);
    form.appendChild(input4);
    div.appendChild(form);

}


function crearbotones(div) {
    var boton = document.createElement('button')
    boton.setAttribute("type", "button");
    boton.id = "btn1";
    boton.innerHTML = "Aceptar";
    boton.setAttribute("onclick", "agregarEmp()");
    var boton1 = document.createElement('button')
    boton1.setAttribute("type", "button");
    boton1.id = "btn2";
    boton1.innerHTML = "Cancelar";
    boton1.setAttribute("onclick", "cancelarAgregarEmpleado()");
    div.appendChild(boton);
    div.appendChild(boton1);
}

function agregarEmp() {
    var input1 = document.getElementById('texto1');
    var input2 = document.getElementById('texto2');
    var input3 = document.getElementById('texto3');
    var input4 = document.getElementById('texto4');
    var input5 = document.getElementById('texto5');
    listaEmpleados.push(new Empleado(input1.value, input2.value, input3.value, input4.value, input5.value));
    mostrarEmpleados(listaEmpleados);
}

function filtrar() {
    var bsucarnombre = document.getElementById('buscar');
    listaProyectosfiltrado = listaEmpleados.filter(empleado => empleado.nombre == bsucarnombre.value);
    mostrarEmpleados(listaProyectosfiltrado);
}


