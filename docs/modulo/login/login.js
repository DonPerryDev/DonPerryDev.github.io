function inicioSesion(evento) {
    /**
     *  * Elimina el contenido del form
     */
  const $formLogin = document.getElementById("conten_login");
  $formLogin.remove();

  /**
   * * Agrega el contenido para el usuario logeado
   */
  const $usuarioLogeado = document.createElement("div");
  $usuarioLogeado.classList.add("nombre_usuario")
  const $header = document.getElementById("header")
  $usuarioLogeado.innerHTML = `<h2>Hola ${evento.target.login.value}</h2>`
  $header.append($usuarioLogeado);

}

export { inicioSesion };
