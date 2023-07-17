// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
//Crear 3 contenedores, cartón del usuario, números del bingo, cartón del ordenador.
// Función que genere un número aleatorio entre 1 y 99.
// Función que genere 15 números aleatorios que no se repitan y los guarde en un array. El cartón del jugador y el del ordenador pueden tener números que se repitan, pero no puede repetirse un número en el mismo cartón.
// Usar esa función para rellenar los 2 cartones dentro de otra función.
// Rellenar el bingo con números del 1 al 99.
// Función que seleccione un número aleatorio entre el 1 y el 99 para marcarlo en el cartón de bingo cada X segundos, el mío es cada 1 segundo.
// Marcar el número que ha salido en el cartón del bingo.
// Buscar en los cartones de los jugadores coincidencias para marcarlo.
// Cada vez que busquemos coincidencias comprobar si ya están todos marcados o no, si ya se han marcado todos, el juego termina y gana el jugador que haya completado el cartón antes.
const buttonStart = document.getElementById('button-start');
const mainElement = document.getElementById('main');
const numbersElement = document.getElementById('numbers');
const numberElement = document.getElementById('number');
const cardboardsElement = document.getElementById('cardboards');
const cardboardUser = document.getElementById('cardboard-user');
const cardboardPc = document.getElementById('cardboard-pc');
const counterElement = document.getElementById('counter');

const randomNumbers = Math.floor(Math.random() * 99);

const getNumbersToFillBoard = () => {
  let arrayNumbersCardboard = [];

  while (arrayNumbersCardboard.length < 15) {
    const randomNumbersCardboards = Math.floor(Math.random() * 99 + 1);
    if (!arrayNumbersCardboard.includes(randomNumbersCardboards)) {
      arrayNumbersCardboard.push(randomNumbersCardboards);
    }
  }

  return arrayNumbersCardboard;
};

const cardboards = board => {
  const numbersBoard = getNumbersToFillBoard();
  numbersBoard.forEach(number => {
    const numberCardboard = document.createElement('p');
    numberCardboard.textContent = number;
    numberCardboard.dataset.number = number;
    numberCardboard.classList.add('cardboard-number');

    board.append(numberCardboard);
  });
};

cardboards(cardboardUser);
cardboards(cardboardPc);

let array99numbers = Array(99)
  .fill()
  .map((_, index) => index + 1);

const paintedNumbers = randomNumber => {
  const selectedNumber = document.querySelector(
    `[data-number="${randomNumber}"]`
  );
  selectedNumber.classList.add('painted-number');
};

const paintedNumbersCardboards = randomNumber => {
  const selectNumberCardboard = cardboardsElement.querySelector(
    `[data-number="${randomNumber}"]`
  );
  selectNumberCardboard.classList.add('number-correct');
};

const getRandomNumber = () => {
  const randomPosition = Math.floor(Math.random() * array99numbers.length);
  const randomNumber = array99numbers[randomPosition];
  array99numbers = array99numbers.filter(number => number !== randomNumber);
  counterElement.textContent = `Number: ${randomNumber}`;
  paintedNumbers(randomNumber);
  paintedNumbersCardboards(randomNumber);
};

setInterval(getRandomNumber, 400);
