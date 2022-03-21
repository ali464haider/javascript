var opciones_conciertos=[{nombre:"AC/DC", valor:"acdc", precio:100},
{nombre:"Barón Rojo", valor:"baron", precio:80},
{nombre:"Iron Butterfly", valor:"iron", precio:120}
];

function listadesplegable(){
    var header=document.createElement('h2');
    header.innerText="Lista de conciertos";
    document.getElementById('div1').appendChild(header);
    var myparent=document.getElementById('div1');
    var lista=document.createElement('select');
    lista.id="selecto";
    myparent.appendChild(lista);
    for(i=0;i<opciones_conciertos.length;i++){
        var opccion=document.createElement('option');
        opccion.value=opciones_conciertos[i].valor;
        lista.appendChild(opccion);
        opccion.innerText=opciones_conciertos[i].nombre
    }
    lista.setAttribute("onchange","alcambiar()");
}

function alcambiar(){
    if(!document.getElementById('parrafo')){
    var parrafo=document.createElement('p');
    parrafo.id="parrafo"
    parrafo.innerText=`El concierto de ${opciones_conciertos[document.getElementById('selecto').selectedIndex].nombre} vale ${opciones_conciertos[document.getElementById('selecto').selectedIndex].precio}`;
    document.getElementById('div2').appendChild(parrafo);
    } else{
        var parrafo =document.getElementById('parrafo');
        parrafo.remove();
        var parrafo=document.createElement('p');
        parrafo.id="parrafo"
        parrafo.innerText=`El concierto de ${opciones_conciertos[document.getElementById('selecto').selectedIndex].nombre} vale ${opciones_conciertos[document.getElementById('selecto').selectedIndex].precio}`;
        document.getElementById('div2').appendChild(parrafo);
    }
}