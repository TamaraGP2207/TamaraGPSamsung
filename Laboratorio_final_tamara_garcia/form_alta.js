function enviar_formulario(){ //1
// Asignación de variables
    let nombre = document.getElementById('inom').value;
    let regex_nombre = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/;

    let primer_ape = document.getElementById('iprim_ape').value;
    let regex_primer_ape = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/;

    let segundo_ape = document.getElementById('iseg_ape').value;
    let regex_segundo_ape = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/;

    let email = document.getElementById('iema').value;
    let regex_ema = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    let login = document.getElementById('ilog').value;
    
    let contraseña = document.getElementById('ipas').value;
    let regex_contraseña = /^[\s\S]{4,8}$/;

    let mensaje_text = " ";

//Cálculo de resultados

if (nombre == ''||primer_ape == ''||segundo_ape == ''||email == ''||login == ''||contraseña == '') {
    mensaje_text = "Rellene todos los campos";

    document.getElementById("mensaje").className = "info visible";
    document.getElementById("mensaje").innerHTML = mensaje_text;
    
  } else if (!regex_nombre.test(nombre)||!regex_primer_ape.test(primer_ape)||!regex_segundo_ape.test(segundo_ape)||!regex_ema.test(email)||!regex_contraseña.test(contraseña)) {
    mensaje_text = "Introduzca datos correctos";
    
    document.getElementById("mensaje").className = "info visible";
    document.getElementById("mensaje").innerHTML = mensaje_text;
    
  } else {
    mensaje_text = " ";
    
    document.getElementById("ibtn_consulta").className = "visible";
    document.getElementById("ibtn_enviar").className = "invisible";
   
}

}//1
    

    