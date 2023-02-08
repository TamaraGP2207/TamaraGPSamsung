
function enviar(){
  let nombre = document.getElementById('inom').value;
  let regex_nom = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/;
  let mensaje_error_nom="";
  let email = document.getElementById('iema').value;
  let regex_ema = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  let mensaje_error_ema ="";
  let clave = document.getElementById('icla').value;
  let regex_cla = /^[\s\S]{0,8}$/;
  let mensaje_error_cla ="";
  let confir_cla = document.getElementById('icon').value;
  let mensaje_error_con ="";
  let mensaje_enviado ="";
 
// If para el nombre
  if (nombre == '') {
        mensaje_error_nom = "Rellene este campo";

        document.getElementById("imensaje_nom").innerHTML = mensaje_error_nom;
        document.getElementById("grupo_input_nom").className = "grupo incorrecto";
        document.getElementById("error_nom").className = "visible";
        document.getElementById("ok_nom").className = "invisible";
      
      } else if (!regex_nom.test(nombre)) {
        mensaje_error_nom = "No se admiten caracteres numéricos";
        
        document.getElementById("imensaje_nom").innerHTML = mensaje_error_nom;
        document.getElementById("grupo_input_nom").className = "grupo incorrecto";
        document.getElementById("error_nom").className = "visible";
        document.getElementById("ok_nom").className = "invisible";

      } else {
        mensaje_error_nom = " ";

        document.getElementById("imensaje_nom").innerHTML = mensaje_error_nom;
        document.getElementById("grupo_input_nom").className = "grupo correcto";
        document.getElementById("ok_nom").className = "visible";
        document.getElementById("error_nom").className = "invisible";
      }

// If para el email
  if (email == '') {
        mensaje_error_ema = "Rellene este campo";

        document.getElementById("imensaje_ema").innerHTML = mensaje_error_ema;
        document.getElementById("grupo_input_ema").className = "grupo incorrecto";
        document.getElementById("error_ema").className = "visible";
        document.getElementById("ok_ema").className = "invisible";
      
      } else if (!regex_ema.test(email)) {
        mensaje_error_ema = "Email NO válido";

        document.getElementById("imensaje_ema").innerHTML = mensaje_error_ema;
        document.getElementById("grupo_input_ema").className = "grupo incorrecto";
        document.getElementById("error_ema").className = "visible";
        document.getElementById("ok_ema").className = "invisible";
      
      } else {
        mensaje_error_ema = " ";
        
        document.getElementById("imensaje_ema").innerHTML = mensaje_error_ema;
        document.getElementById("grupo_input_ema").className = "grupo correcto";
        document.getElementById("ok_ema").className = "visible";
        document.getElementById("error_ema").className = "invisible";

      }

// If para la clave
  if (clave == '') {
        mensaje_error_cla = "Rellene este campo";

        document.getElementById("imensaje_cla").innerHTML = mensaje_error_cla;
        document.getElementById("grupo_input_cla").className = "grupo incorrecto";
        document.getElementById("error_cla").className = "visible";
        document.getElementById("ok_cla").className = "invisible";
      
      } else if (!regex_cla.test(clave)) {
        mensaje_error_cla = "No debe tener más de 8 caracteres";

        document.getElementById("imensaje_cla").innerHTML = mensaje_error_cla;
        document.getElementById("grupo_input_cla").className = "grupo incorrecto";
        document.getElementById("error_cla").className = "visible";
        document.getElementById("ok_cla").className = "invisible";

      } else {
        mensaje_error_cla = " ";

        document.getElementById("imensaje_cla").innerHTML = mensaje_error_cla;
        document.getElementById("grupo_input_cla").className = "grupo correcto";
        document.getElementById("ok_cla").className = "visible";
        document.getElementById("error_cla").className = "invisible";

      }

// If para la confirmación de la clave
  if (confir_cla == '') {
        mensaje_error_con = "Rellene este campo";

        document.getElementById("imensaje_con").innerHTML = mensaje_error_con;
        document.getElementById("grupo_input_con").className = "grupo incorrecto";
        document.getElementById("error_con").className = "visible";
        document.getElementById("ok_con").className = "invisible";
      
      } else if (confir_cla!=clave) {
        mensaje_error_con = "Las contraseñas no coinciden";

        document.getElementById("imensaje_con").innerHTML = mensaje_error_con;
        document.getElementById("grupo_input_con").className = "grupo incorrecto";
        document.getElementById("ok_con").className = "invisible";
        document.getElementById("error_con").className = "visible";
      } else {
        mensaje_error_con = " ";

        document.getElementById("imensaje_con").innerHTML = mensaje_error_con;
        document.getElementById("grupo_input_con").className = "grupo correcto";
        document.getElementById("ok_con").className = "visible";
        document.getElementById("error_con").className = "invisible";

      }


// If formulario enviado
  if (mensaje_error_nom==" " && mensaje_error_ema==" " && mensaje_error_cla==" " && mensaje_error_con==" ") {
        mensaje_enviado = " Formulario enviado correctamente ";

        document.getElementById("imensaje_env").innerHTML = mensaje_enviado;
        document.getElementById("imensaje_env").className = "env_correcto";
      
      } else {
        mensaje_enviado = " ";

        document.getElementById("imensaje_env").innerHTML = mensaje_enviado;
      }

    return false;

    
  }

       
   



