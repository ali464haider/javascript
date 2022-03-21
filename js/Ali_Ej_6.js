
let con=2;
function cambiar2(){

    let verde=document.getElementById('btn2');
    if(con%2==0){
    verde.style.color="green";
    con=con+1;
    }else{
    verde.style.color="red";
    con=con+1;
    }
}

function crear(){
    if(document.getElementsByTagName('a')[0]==null){
        var a = document.createElement('a');
        let text1=document.getElementById('text1').value;
        let text2=document.getElementById('text2').value;
        a.setAttribute('href',text1);
        a.innerHTML = text2;
        document.getElementsByTagName('div')[0].appendChild(a);
    }
        
    
}