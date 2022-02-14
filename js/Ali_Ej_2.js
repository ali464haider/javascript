function cambiarEstado()
{
	let parrafo=document.getElementsByTagName("p");
    let dives=document.getElementsByTagName("div");
    for (i=0;i<parrafo.length;i++){
        parrafo[i].style.color="red";
        parrafo[i].innerHTML="ROJO";
    }
    for(i=0;i<dives.length;i++){
        dives[i].style.color="green";
        dives[i].innerHTML="VERDE";
    }

	
}