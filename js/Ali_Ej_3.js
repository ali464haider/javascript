function Enviar(){
let nombre=document.getElementById("nombre").value;
let edad=document.getElementById("edad").value;
if(edad>=18){
    alert(nombre+" eres mayor de edad");
}else{
    alert(nombre+" eres menor de edad");
}

}