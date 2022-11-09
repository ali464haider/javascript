listaCategorias = [
    ["Moviles", "https://guide-images.cdn.ifixit.com/igi/H4M1JEQiZabe4Vo2.standard","moviles.html"],
    ["Tablets", "https://guide-images.cdn.ifixit.com/igi/RacpAWWRuobmX5g4.standard","tablets.html"],
    ["Pc Portatil", "https://guide-images.cdn.ifixit.com/igi/IlacTC2EdoTKtKdC.standard","portatil.html"],
    ["Pc Ordenador", "https://guide-images.cdn.ifixit.com/igi/P1WJqUOlaXZYNVSD.standard","sobremesa.html"]
];

window.onload = () => {
    var categoria = document.getElementsByClassName("categorias")[0];
    cargarCategorias(listaCategorias);
}

function cargarCategorias(lista) {
    var categoria = document.getElementsByClassName("categorias")[0];
    categoria.innerHTML="";
    lista.forEach(elemento => {
            var a = document.createElement('a');
            a.setAttribute("href",elemento[2]);
            a.classList.add("categoria-item");

            var div=document.createElement('div');
            div.classList.add("overlay");
            a.appendChild(div);

            var p=document.createElement('p');
            p.classList.add("title");
            p.innerHTML=elemento[0];
            a.appendChild(p);

            var img=document.createElement('img')
            img.setAttribute("src",elemento[1]);
            a.appendChild(img);

            categoria.appendChild(a);
        })
}

function filtrar() {
    var contenido = event.target.value;
    var listaFiltrada = listaCategorias.filter(elemento => elemento[0].toLowerCase().includes(contenido.toLowerCase()));
    cargarCategorias(listaFiltrada)
}

document.getElementById("searchForm").addEventListener("keyup", filtrar);


