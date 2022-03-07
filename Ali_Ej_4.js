var nombres=["Ali","Alejandro","Brandom","Sergio"];
function cargar(){
    var myParent = document.body;
    

    var selectlist=document.createElement("select")
    selectlist.id="myselect";

    myParent.appendChild(selectlist);


    for(i=0;i<nombres.length;i++){

        var option=document.createElement("option");
        option.value=i;
        option.text=nombres[i];
        selectlist.appendChild(option);
        
    }

    
}
function clik(){
    var nombre;
    var valor=document.getElementById("myselect").value;
    nombre=nombres[valor];
    alert("El nombre seleccionado es "+nombre+" y es la option "+valor);
}