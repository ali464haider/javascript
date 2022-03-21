function buscar(){
    var buscado=document.getElementById('q').value;
    var selecto=document.getElementById('selecto').value;
    if (buscado!="" && selecto==='google'){
        document.forms[0].action="https://www.google.com/search";
        document.forms[0].method="get";
        document.forms[0].submit();
    }else if(buscado!="" && selecto==='yahoo'){
        document.forms[0].action="https://es.search.yahoo.com/search";
        document.forms[0].method="get";
        document.forms[0].submit();
    }else
    alert('Introcuzca algo para buscar');
}