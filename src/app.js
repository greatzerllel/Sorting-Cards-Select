const digito = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const pintas = ["♥", "♦", "♠ ", "♠"];
let i = "";
let arrCartas = [];

let newObject = {};

const inputUsuario = () => {
  let input = document.getElementById("inputUsuario");
  return parseInt(input.value);
};

let input = document.getElementById("inputUsuario");
input.addEventListener("change", inputUsuario);

let seccionCarta = document.getElementById("sec-generar");
let botonGenerar = document.getElementById("btnGenCarta");

botonGenerar.addEventListener("click", () => {
  let resultado0 = dibujarCarta(arrCartas);
});

function dibujarCarta() {
  arrCartas = [];
  seccionCarta.innerHTML = "";
  let contenedorCarta = document.createElement("div");

  for (i = 0; i < inputUsuario(); i++) {
    let sortNumbers = digito[Math.floor(Math.random() * 13)];
    let sortPintas = pintas[Math.floor(Math.random() * 4)];

    let color = sortPintas === "♥" || sortPintas === "♦" ? "red" : "black";

    let objCarta = {};

    objCarta.numero = sortNumbers;
    objCarta.tipo = sortPintas;
    arrCartas.push(objCarta);

    let nuevaCarta = document.createElement("div");
    let divNumero = document.createElement("div");
    let divPinta = document.createElement("div");
    let divPinta2 = document.createElement("div");

    divPinta.style.color = color;
    divPinta2.style.color = color;

    divNumero.innerHTML = cambiarValor(objCarta.numero);

    divPinta.innerHTML = objCarta.tipo;
    divPinta2.innerHTML = objCarta.tipo;

    contenedorCarta.classList.add("section-cartas");
    nuevaCarta.classList.add("carta");
    divNumero.classList.add("carta-numeros");
    divPinta.classList.add("tipo-arriba");
    divPinta2.classList.add("tipo-abajo");

    nuevaCarta.append(divNumero, divPinta, divPinta2);
    contenedorCarta.appendChild(nuevaCarta);
  }
  seccionCarta.append(contenedorCarta);
}

function cambiarValor(digit) {
  switch (digit) {
    case 1:
      return "A";
    case 10:
      return "10";
    case 11:
      return "J";
    case 12:
      return "Q";
    case 13:
      return "K";
    default:
      return digit;
  }
}

let secAlgoritmo = document.getElementById("sec-algoritmo");

let botonOrdenar = document.getElementById("btnClasCarta");
botonOrdenar.addEventListener("click", () => {
  secAlgoritmo.innerHTML = "";
  bubbleSort(arrCartas);
});

const bubbleSort = arr => {
  let wall = arr.length - 1;
  while (wall > 0) {
    let index = 0;
    while (index < wall) {
      if (arr[index].numero > arr[index + 1].numero) {
        let aux = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = aux;
      }
      index++;
    }
    wall--;
    dibujarCartaOrdenadas(arr);
  }
  return arr;
};

function dibujarCartaOrdenadas(arr) {
  let contenedorCarta = document.createElement("div");

  for (i = 0; i < arr.length; i++) {
    contenedorCarta.classList.add("section-cartas2");

    let nuevaCarta = document.createElement("div");
    let divNumero = document.createElement("div");
    let divPinta = document.createElement("div");
    let divPinta2 = document.createElement("div");

    nuevaCarta.classList.add("carta");
    divNumero.classList.add("carta-numeros");
    divPinta.classList.add("tipo-arriba");
    divPinta2.classList.add("tipo-abajo");

    let color = arr[i].tipo === "♥" || arr[i].tipo === "♦" ? "red" : "black";
    divPinta.style.color = color;
    divPinta2.style.color = color;

    divNumero.innerHTML = cambiarValor(arr[i].numero);

    divPinta.innerHTML = arr[i].tipo;
    divPinta2.innerHTML = arr[i].tipo;

    nuevaCarta.append(divNumero, divPinta, divPinta2);
    contenedorCarta.appendChild(nuevaCarta);
  }

  secAlgoritmo.append(contenedorCarta);

  return arr;
}
