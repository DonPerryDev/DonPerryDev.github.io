import { inicioSesion } from "./login/login.js";
import { agregarEventosEstilos } from "./sidebar/modos.js";
import { tarjetasIniciales } from "./tarjetas/tarjetas.js";
/**
 * Ejecutar cuando el DOM carge por completo
 */
document.addEventListener("DOMContentLoaded", () => {
  const $login = document.getElementById("conten_login");
  $login.addEventListener("submit", inicioSesion);
  tarjetasIniciales();
  agregarEventosEstilos();
});
