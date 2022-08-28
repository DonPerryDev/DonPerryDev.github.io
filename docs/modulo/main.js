import { inicioSesion } from "./login/login.js";
/**
 * Ejecutar cuando el DOM carge por completo 
 */
document.addEventListener("DOMContentLoaded", () => {
  const $login = document.getElementById("conten_login");
  $login.addEventListener("submit", inicioSesion);
});
