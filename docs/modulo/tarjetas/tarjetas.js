import { TARJETAS_MOCK } from "../mocks/datos_tarjetas.js";

function agregarTarjeta(titulo, imagen, descripcion, index) {
  const $contenedor = document.getElementById("tarjetas");
  const $divTarjeta = document.createElement("div");
  $divTarjeta.classList.add("tarjeta");
  $divTarjeta.id = `tarjeta_${index}`;
  const tarjeta = `<div class="titulo">
                        <div class="titulo_tarjeta">
                            <h2>${titulo}</h2>
                        </div>
                        <div class="img_tarjeta">
                            <img
                                src="${imagen}"
                                alt=""
                            />
                        </div>
                        <div class="footer_tarjeta">
                            <div class="descripcion">
                                <p class="descripcion_tarjeta">
                                ${descripcion}
                                </p>
                            </div>
                            <div class="acciones">
                                <button id = "borrar_${index}">Borrar</button>
                                <button id="detalles_${index}">Ver detalles</button>
                            </div>
                        </div>
                    </div>`;

  /**
   * * agregar contenido al DOM
   */
  $divTarjeta.innerHTML = tarjeta;
  $contenedor.append($divTarjeta);
  const $botonDetalles = document.getElementById(`detalles_${index}`);
  const $botonBorrar = document.getElementById(`borrar_${index}`);

  /**
   * * Agregar eventos
   */
  $botonDetalles.addEventListener("click", (evento) => {
    detallesTarjeta(evento, index);
  });
  $botonBorrar.addEventListener("click", (evento) => {
    borrarTarjeta(`tarjeta_${index}`);
  });
}

function tarjetasIniciales() {
  TARJETAS_MOCK.forEach((tarjeta, index) => {
    agregarTarjeta(tarjeta.titulo, tarjeta.img, tarjeta.descripcion, index);
  });
}

function detallesTarjeta(evento, index) {
  alert(TARJETAS_MOCK[index].titulo);
}

function borrarTarjeta(id) {
  const $tarjeta = document.getElementById(id);
  $tarjeta.remove();
}

export { tarjetasIniciales };
