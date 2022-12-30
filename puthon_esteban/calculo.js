function calcular1(){
    var Altura = document.getElementById("altura").value;
    var Largo = document.getElementById("largo").value;
    var Ancho = document.getElementById("ancho").value;

    if (Altura==""){
        alert("La altura falta");
        document.getElementById("altura").focus();
    }else{
        if (Largo==""){
            alert("La largo falta");
            document.getElementById("largo").focus();
    }else{
        if (Ancho==""){
            alert("Ancho falta");
            document.getElementById("ancho").focus();
    }
            document.getElementById("resultado").value = Altura * Largo* Ancho
    } 
    }
 }



    






/*
    var respuesta1 = confirm(Altura + " " + Largo + " " + Ancho + " ");

    console.log(Altura + " " + Largo + " " + Ancho + " ");

    if(respuesta1 == true){
        document.getElementById("altura").value="";
        document.getElementById("largo").value="";
        document.getElementById("ancho").value="";
        return true;
        }
        else{
                   
        return false;
        } 
*/

