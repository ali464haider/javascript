var amigos=[{nombre:"Pepe", apellido:"Pérez"},
{nombre:"Elena", apellido:"Nito"},
{nombre:"Dolores", apellido:"Fuertes"}];

function crearTablaAmigos(){
    var tr1,td1,td2;
    var myparent=document.getElementById('contenedor_amigos');
    var tabla=document.createElement("table");
    tabla.className="tabla";
    myparent.appendChild(tabla);
    for(i=0;i<amigos.length;i++){
         tr1=document.createElement("tr");
         td1=document.createElement("td");
         td2=document.createElement("td");
         tabla.appendChild(tr1);
         tr1.appendChild(td1);
         tr1.appendChild(td2);
         td1.innerText=amigos[i].nombre;
         td2.innerText=amigos[i].apellido;
    }

}
