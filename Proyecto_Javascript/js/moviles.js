class Movil {
    constructor(marca, modelo, cantidad, parteReparar, price) {
        this.marca = marca || "Sin marca";
        this.modelo = modelo || "Sin modelo";
        this.price = price || "100";
        this.cantidad = cantidad || "0";
        this.parteReparar = parteReparar || "pantalla";
    }

    actualizarPrecio(precioNuevo) {
        this.price = precioNuevo;
    }
    cambiarModelo(nuevoModelo) {
        this.modelo = nuevoModelo;
    }
    cambiarMarca(nuevoMarca) {
        this.marca = nuevoMarca;
    }
}


listaMoviles = [];

window.onload = () => {
    cargarListaMoviles(listaMoviles);
    pintarTabla(listaMoviles);
}

function cargarListaMoviles(lista) {
    lista.push(new Movil("Iphone", "X", "1", "Pantalla", "100"));
    lista.push(new Movil("Iphone", "11", "1", "Pantalla", "150"));
    lista.push(new Movil("Iphone", "12", "1", "Pantalla", "150"));
    lista.push(new Movil("Iphone", "13", "1", "Pantalla", "200"));
    lista.push(new Movil("Iphone", "14", "1", "Pantalla", "300"));
    lista.push(new Movil("Samsung", "s10", "1", "Pantalla", "200"));
    lista.push(new Movil("Samsung", "s20", "1", "Pantalla", "200"));
    lista.push(new Movil("Samsung", "s21", "1", "Pantalla", "250"));
    lista.push(new Movil("Samsung", "s22", "1", "Pantalla", "300"));
    lista.push(new Movil("Samsung", "s21FE", "1", "Pantalla", "250"));
    lista.push(new Movil("Huawei", "P30", "1", "Pantalla", "200"));
    lista.push(new Movil("Huawei", "P40", "1", "Pantalla", "250"));
    lista.push(new Movil("Huawei", "P50", "1", "Pantalla", "250"));
    lista.push(new Movil("Huawei", "P60", "1", "Pantalla", "350"));
    lista.push(new Movil("Huawei", "P70", "1", "Pantalla", "400"));
}

function pintarTabla(lista) {
    var div = document.getElementById("tabla-content");
    if (!document.getElementById("tablaObjetoMoviles")) {
        var tabla = document.createElement("table");
        var tbody= document.createElement('tbody');
        tabla.id = "tablaObjetoMoviles";
        tbody.innerHTML += `<tr>
                            <th>Marca</th>
                            <th>Modelo</th>
                            <th>cantidad</th>
                            <th>parteReparar</th>
                            <th>price</th>
                            <th>AgregarAlCarrito</th>
                            <tr>`
        lista.forEach(movil => {
            tbody.innerHTML += `<tr>
                            <td>${movil.marca}</td>
                            <td>${movil.modelo}</td>
                            <td>${movil.cantidad}</td>
                            <td>${movil.parteReparar}</td>
                            <td>${movil.price}</td>
                            <td><button type="button" id="btnAgrgarCarrito">+</button></td>
                            <tr>`;
                            
        })
        tabla.appendChild(tbody);
        div.appendChild(tabla);
    }
    

   
}