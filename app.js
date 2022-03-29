const visor = document.getElementById("visor");
var op1;
var op2;
var operacion = 0;
var res = false;

function decimal() {
  if (visor.value === "0") {
    visor.value = "0.";
  } else {
    mostar(".");
  }
}
function mostar(numero) {
  if (visor.value === "0" || res) {
    visor.value = numero;
    res = false;
  } else {
    visor.value += numero;
  }
}
function sumar() {
  operandos();
  if (op2 !== undefined) {
    op1 += op2;
    visor.value = op1;
    reset();
  } else operacion = 1;
}
function restar() {
  operandos();
  if (op2 !== undefined) {
    op1 -= op2;
    visor.value = op1;
    reset();
  } else operacion = 2;
}
function multiplicar() {
  operandos();
  if (op2 !== undefined) {
    op1 *= op2;
    visor.value = op1;
    reset();
  } else operacion = 3;
}
function dividir() {
  operandos();
  if (op2 !== undefined) {
    op1 /= op2;
    visor.value = op1;
    reset();
  } else operacion = 4;
}

function resultado() {
  operandos();
  switch (operacion) {
    case 1:
      op1 += op2;
      break;
    case 2:
      op1 -= op2;
      break;
    case 3:
      op1 *= op2;
      break;
    case 4:
      op1 /= op2;
      break;
    default:
      op2 = undefined;
      break;
  }
  visor.value = op1;
  operacion = 0;
  op1 = undefined;
  reset();
}

function reset() {
  op2 = undefined;
  res = true;
}
function operandos() {
  if (op1 === undefined) op1 = Number(visor.value);
  else op2 = Number(visor.value);
  visor.value = 0;
}
