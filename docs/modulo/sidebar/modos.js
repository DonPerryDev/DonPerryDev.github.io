function agregarEventosEstilos() {
  const $estilo1 = document.querySelector("#estilo1");
  const $estilo2 = document.querySelector("#estilo2");
  const $estilo3 = document.querySelector("#estilo3");

  $estilo1.addEventListener("click", estilo1);
  $estilo2.addEventListener("click", estilo2);
  $estilo3.addEventListener("click", estilo3);
}

function estilo1() {
  const $actuales = document.querySelector(".estilos");
  if ($actuales.getAttribute("href") !== "./estilos.css") {
    $actuales.remove();
    const $head = document.querySelector(".head");
    const $nuevosEstilos = document.createElement("link");
    $nuevosEstilos.setAttribute("rel", "stylesheet");
    $nuevosEstilos.setAttribute("href", "estilos.css");
    $nuevosEstilos.classList.add("estilos");
    $head.append($nuevosEstilos);
  }
}
function estilo2() {
  const $actuales = document.querySelector(".estilos");
  if ($actuales.getAttribute("href") !== "./estilos.css") {
    $actuales.remove();
    const $head = document.querySelector(".head");
    const $nuevosEstilos = document.createElement("link");
    $nuevosEstilos.setAttribute("rel", "stylesheet");
    $nuevosEstilos.setAttribute("href", "estilos2.css");
    $nuevosEstilos.classList.add("estilos");
    $head.append($nuevosEstilos);
  }
}
function estilo3() {
  const $actuales = document.querySelector(".estilos");
  if ($actuales.getAttribute("href") !== "./estilos2.css") {
    $actuales.remove();
    const $head = document.querySelector(".head");
    const $nuevosEstilos = document.createElement("link");
    $nuevosEstilos.setAttribute("rel", "stylesheet");
    $nuevosEstilos.setAttribute("href", "estilos3.css");
    $nuevosEstilos.classList.add("estilos");
    $head.append($nuevosEstilos);
  }
}

export { agregarEventosEstilos };
