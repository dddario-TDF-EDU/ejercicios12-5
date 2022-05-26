let botonaso = document.getElementById("direccion");

botonaso.addEventListener("click", () => {
  let trabajoDir: number = Number(seleccion.value);

  switch (trabajoDir) {
    case 1:
      location.href = "../ejerciciosProg/multiplos.html";
      break;

    default:
      alert("Nunca deberia llegarse a este cartel");
  }
});
