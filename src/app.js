const digitos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const pintas = ["♥", "♦", "♠ ", "♠"];

let arrCartas = [];

let newObject = {};

let i = "";

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
    let sortNumbers = digitos[Math.floor(Math.random() * 13)];
    let sortPintas = pintas[Math.floor(Math.random() * 4)];

    let color = sortPintas === "♥" || sortPintas === "♦" ? "red" : "black";

    let objCarta = {};

    objCarta.numero = sortNumbers;
    objCarta.pinta = sortPintas;
    arrCartas.push(objCarta);

    let nuevaCarta = document.createElement("div");
    let divNumero = document.createElement("div");
    let divPinta = document.createElement("div");
    let divPinta2 = document.createElement("div");

    divPinta.style.color = color;
    divPinta2.style.color = color;

    divNumero.innerHTML = cambiarDigito(objCarta.numero);
    divPinta.innerHTML = objCarta.pinta;
    divPinta2.innerHTML = objCarta.pinta;

    contenedorCarta.classList.add("section-cartas");
    nuevaCarta.classList.add("carta");
    divNumero.classList.add("carta-numeros");
    divPinta.classList.add("pinta-arriba");
    divPinta2.classList.add("pinta-abajo");

    nuevaCarta.append(divNumero, divPinta, divPinta2);
    contenedorCarta.appendChild(nuevaCarta);
  }

  seccionCarta.append(contenedorCarta);
}

function cambiarDigito(digito) {
  switch (digito) {
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
      return digito;
  }
}

let secAlgoritmo = document.getElementById("sec-algoritmo");

let botonOrdenar = document.getElementById("btnClasCarta");
botonOrdenar.addEventListener("click", () => {
  secAlgoritmo.innerHTML = "";
  selectSort(arrCartas);
});

function selectSort(arr) {
  let min = 0;
  while (min < arr.length - 1) {
    for (let i = min + 1; i < arr.length; i++) {
      if (arr[min].numero > arr[i].numero) {
        let aux = arr[min];
        arr[min] = arr[i];
        arr[i] = aux;
      }
    }
    min++;
    dibujarCartaOrdenadas(arr);
  }
  return arr;
}

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
    divPinta.classList.add("pinta-arriba");
    divPinta2.classList.add("pinta-abajo");

    let color = arr[i].pinta === "♥" || arr[i].pinta === "♦" ? "red" : "black";
    divPinta.style.color = color;
    divPinta2.style.color = color;

    divNumero.innerHTML = cambiarDigito(arr[i].numero);
    divPinta.innerHTML = arr[i].pinta;
    divPinta2.innerHTML = arr[i].pinta;

    nuevaCarta.append(divNumero, divPinta, divPinta2);
    contenedorCarta.appendChild(nuevaCarta);
  }

  secAlgoritmo.append(contenedorCarta);
  return arr;
}
