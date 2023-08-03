/* eslint-disable */
import "bootstrap";
import "./style.css";
const Numeros = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
let iconsArray = ["fa-clover", "fa-spa", "fa-heart", "fa-diamond"];
// aqui definiremos mi array para ir accediendo a el mismo

const ArrCartas = [
  {
    tipo: "Corazones",
    Numeros: Numeros,
    icon: iconsArray[2]
  },
  {
    tipo: "Pica",
    Numeros: Numeros,
    icon: iconsArray[1]
  },
  {
    tipo: "Clubes",
    Numeros: Numeros,
    icon: iconsArray[0]
  },
  {
    tipo: "Diamantes",
    Numeros: Numeros,
    icon: iconsArray[3]
  }
];

// accedemos al boton para generar una carta nueva
const buttonGen = document.getElementById("buttonGen");
let itemFocus = undefined;
let itemFocusReverse = undefined;

// esta variable cambiara si solo si le damos al boton de generar para saber cuando se genera con el boton y cuando no
let varValidGen = false;
buttonGen.addEventListener("click", GenerateCard);

function GenerateCard(event) {
  event.preventDefault();
  console.log("xd");
  varValidGen = true;
  GenAleatoryCard();
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.onload = GenAleatoryCard;

function GenAleatoryCard() {
  // numero aleatorio para definir el array
  const tipo = getRandomIntInclusive(0, ArrCartas.length - 1);
  const ObjetoCarta = ArrCartas[tipo];
  // ahora generamos el numero random para ver que carta veremos y accedemos al mismo dentro del array
  const numRandomPalo =
    ObjetoCarta.Numeros[
      getRandomIntInclusive(0, ObjetoCarta.Numeros.length - 1)
    ];
  // obtengo los elementos para cambiarle la clase
  const firstIcon = document.getElementById("item-icon");
  const secondIcon = document.getElementById("item-icon-reverse");
  const NumCard = document.getElementById("num");

  if (varValidGen === true) {
    // accedemos al padre al cual le cambiaremos el alto y ancho
    const padre = document.getElementById("cartaPrincipal");
    // accedo al input del ancho y alto
    const valueAlto = document.getElementById("inputAlto").value;
    const valueAncho = document.getElementById("inputAncho").value;
    // cambio valores del padre
    padre.style.height = valueAlto + "px";
    padre.style.width = valueAncho + "px";

    firstIcon.removeChild(itemFocus);
    secondIcon.removeChild(itemFocusReverse);
  }

  // cambio el valor del texto
  NumCard.innerHTML = numRandomPalo;
  // creo 2 imagenes
  // primera imagen
  const newI = document.createElement("i");
  newI.style.fontSize = "70px";
  newI.classList.add("fa-solid");
  newI.classList.add(ArrCartas[tipo].icon);

  firstIcon.appendChild(newI);
  itemFocus = newI;

  // segunda pero en reversa
  const newIReverse = document.createElement("i");
  newIReverse.style.fontSize = "70px";
  newIReverse.classList.add("fa-solid");
  newIReverse.classList.add(ArrCartas[tipo].icon);
  newIReverse.style.transform = "rotate(-180deg)";

  if (ObjetoCarta.tipo === "Corazones") {
    newI.style.color = "red";
    newIReverse.style.color = "red";
  } else if (ObjetoCarta.tipo === "Diamantes") {
    newIReverse.style.color = "red";
    newI.style.color = "red";
  } else {
    newI.style.color = "black";
    newIReverse.style.color = "black";
  }

  secondIcon.appendChild(newIReverse);
  itemFocusReverse = newIReverse;
}
