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
const buttonRestart = document.getElementById('button-again');
const cardboardUser = document.getElementById('cardboard-user');
const cardboardPc = document.getElementById('cardboard-pc');
const counterElement = document.getElementById('counter');
const playersUser = document.getElementById('players-user');
const playersPc = document.getElementById('players-pc');

const randomNumbers = Math.floor(Math.random() * 99);

let interval;

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
    if (board.id === 'cardboard-user') {
      numberCardboard.dataset.number = `player-${number}`;
    } else {
      numberCardboard.dataset.number = `pc-${number}`;
    }
    numberCardboard.classList.add('cardboard-number');

    board.append(numberCardboard);
  });
};

cardboards(cardboardUser);
cardboards(cardboardPc);

let array99numbers = Array(99)
  .fill()
  .map((_, index) => index + 1);

const painteNumbersCardboards = randomNumber => {
  const selectNumberCardboardUser = cardboardUser.querySelector(
    `[data-number="player-${randomNumber}"]`
  );

  if (selectNumberCardboardUser) {
    selectNumberCardboardUser.classList.add('number-correct');
  }
  const selectNumberCardboardPc = cardboardPc.querySelector(
    `[data-number="pc-${randomNumber}"]`
  );

  if (selectNumberCardboardPc) {
    selectNumberCardboardPc.classList.add('number-correct');
  }

  whoWins();
};

const paintedNumbers = randomNumber => {
  const selectedNumber = document.querySelector(
    `[data-number="${randomNumber}"]`
  );
  selectedNumber.classList.add('painted-number');
  painteNumbersCardboards(randomNumber);
};

const getRandomNumber = () => {
  const randomPosition = Math.floor(Math.random() * array99numbers.length);
  const randomNumber = array99numbers[randomPosition];
  array99numbers = array99numbers.filter(number => number !== randomNumber);
  counterElement.textContent = `${randomNumber}`;
  paintedNumbers(randomNumber);
};

const whoWins = () => {
  const playerNumbersCorrect =
    cardboardUser.querySelectorAll('.number-correct');
  const pcNumbersCorrect = cardboardPc.querySelectorAll('.number-correct');
  if (playerNumbersCorrect.length === 15) {
    playersUser.textContent = 'YOU WIN!';
    playersPc.textContent = 'SO CLOSE :(';
    clearInterval(interval);
  }
  if (pcNumbersCorrect.length === 15) {
    playersPc.textContent = 'I WIN!';
    playersUser.textContent = 'Sorry, try again';
    clearInterval(interval);
  }
  buttonStart.classList.add('hidden');
  buttonRestart.classList.remove('hidden');
  buttonRestart.classList.add('button-start');
};

const startGame = () => {
  clearInterval(interval);
  interval = setInterval(getRandomNumber, 200);
};

buttonStart.addEventListener('click', () => {
  if (interval) return;
  buttonStart.disabled = true;
  startGame();
});

const restartGame = () => {
  const classlistRemoveBingo = document.querySelectorAll('.painted-number');

  classlistRemoveBingo.forEach(element => {
    element.classList.remove('painted-number');
  });

  const classlistRemoveCardboards =
    document.querySelectorAll('.number-correct');

  classlistRemoveCardboards.forEach(element => {
    element.classList.remove('number-correct');
  });

  playersUser.textContent = 'THIS IS YOURS';
  playersPc.textContent = 'THIS IS MINE';

  array99numbers = Array(99)
    .fill()
    .map((_, index) => index + 1);

  startGame();
};

buttonRestart.addEventListener('click', () => {
  restartGame();
});
