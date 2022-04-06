function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      var nombre=this.responseText;
      var lista=nombre.split(",");
      var select=document.getElementsByTagName("select")[0];
      for(i=0;i<lista.length;i++){
        var opcion = document.createElement("option");
        select.appendChild(opcion);
        opcion.innerHTML=lista[i];
      }
      }
  
    xhttp.open("GET", "Nombres.txt", true);
    xhttp.send();
  }