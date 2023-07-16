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
const userBingoElement = document.getElementById('user-bingo');
const pcBingoElement = document.getElementById('pc-bingo');
const numbersBingo = document.getElementById('numbers');
const buttonElement = document.getElementById('button');
let userPlay;
let pcPlay;
const randomNumberArray = [];
const randomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 99 + 1);
  console.log(randomNumber);
};
const fifteenNumbers = () => {
  for (let i = 0; (i = 15); i++) {
    const fifteenNumbersRandom = Math.floor(Math.random(i) * 15);
  }
};
fifteenNumbers();
