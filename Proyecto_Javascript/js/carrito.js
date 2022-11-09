var carrito = document.getElementsByClassName('carrito')[0];
carrito.addEventListener("click",pintarCarrito);

function pintarCarrito(){
    var carrito=document.getElementById("carrito")
    if(!document.getElementById("carrito-box")){
        var div = document.createElement("div");
        div.id="carrito-box";
        div.innerHTML="La cesta esta vacia"
        carrito.appendChild(div);
    }else{
        carrito.removeChild(document.getElementById("carrito-box"));
    }
   
}