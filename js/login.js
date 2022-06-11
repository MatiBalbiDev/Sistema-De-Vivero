function loguear() {

  let correo = $("#input_correo").val();
  let password = $("#input_password").val();
  let expresion_mail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  let correoOK = expresion_mail.test(correo);

  if (correo != "" && password != "" && correoOK) {
    localStorage.setItem("correo", correo);
    localStorage.setItem("logueado", true);


    $("#input_correo").val("");
    $("#input_password").val("");

    $(".boton_home").css("visibility", "hidden");
    $(".boton_home").css("transition-duration", "0s");

    actualizar();
  } else {
    if (!correoOK) {
      alert("Por favor introduzca un mail válido (name@example.com)");
    } else {
      alert("Por favor introduzca todos los campos");
    }

  }


}

function desloguear() {
  localStorage.removeItem("correo");
  localStorage.setItem("logueado", false);

  $("#sec_login").show();
  $("#sec_loginExitoso").hide();
  actualizar();
}

function actualizar() {

  var logueado = localStorage.getItem("logueado");

  if (logueado == "true") {
    $(".subheader").show();
    $("#texto_logueo").html("Usted esta logueado como:<br>" + localStorage.getItem("correo"));
  } else {
    $(".subheader").hide();
  }
}
