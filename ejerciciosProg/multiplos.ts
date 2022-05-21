function esMultiplo(numA: number, numB: number): boolean {
  let multiplo: boolean = false;
  let modNumero: number = numA % numB;
  if (modNumero == 0) multiplo = true;
  return multiplo;
}

function verificacionNumero(nota): boolean {
  let numValido: boolean;
  if (nota == null || nota == "") numValido = false;
  else numValido = true;
  return numValido;
}

function verificacionMultiplos() {
  let A: number;
  let B: number;
  let numValido: boolean;

  A = Number(prompt("ingrese el primer numero"));
  numValido = verificacionNumero(A);

  if (numValido == false) alert("numero ingresado invalido");
  else {
    B = Number(prompt("ingrese el segundo numero"));
    numValido = verificacionNumero(B);
    if (numValido == false) alert("numero ingresado invalido");
    else {
      if (esMultiplo(A, B) == true) alert("Son multiplos");
      else alert("No son multiplos");
    }
  }
}

let botonaso = document.getElementById("comenzar");

botonaso?.addEventListener("click", () => {
  verificacionMultiplos();
});
