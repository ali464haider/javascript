
function valid(){
    let nam=document.getElementById('nombre').value;
    nam=nam.length;
    if(nam<4){
        alert('El nombre tiene que ser minimo de 4 caracteres');
    }
 
}
function validarcorreo(){
    let correo=document.getElementById('correo').value;
    ValidateEmail(correo);
}

function ValidateEmail(mail) 
{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
    {
        return (true)
    }
        alert("You have entered an invalid email address!")
        return (false)
}

function crear(){
    if(document.getElementById('si').checked==true){
            if(!document.getElementById("distancia0")){
            var myParent = document.getElementById('padre')
            var labe=document.createElement("label");
            labe.id="distancia0";
            labe.innerText="Pon la distancia: ";
                var campo=document.createElement("input");
                campo.id="distancia";
                myParent.appendChild(labe);
                myParent.appendChild(campo);
        }
        con=con+1;
       
    }else if(document.getElementById("distancia0")){
        var labe=document.getElementById("distancia0");
        var campo=document.getElementById("distancia");
        labe.remove();
        campo.remove();
    }

    }

    function mostrar(){
        let nam=document.getElementById('nombre').value;
        let correo=document.getElementById('correo').value;
        if(document.getElementById('si').checked==true){
            let campo=document.getElementById("distancia").value;  
            alert('Tu nombre es '+nam+' y correo '+correo+' y has corrido antes con la distancia '+campo);
        }else{
            alert('Tu nombre es '+nam+' y correo '+correo+' y no has corrido antes');
        }
    }
    


   
 