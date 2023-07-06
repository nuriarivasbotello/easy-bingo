// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
const userBingoElement = document.getElementById('user-bingo');
const pcBingoElement = document.getElementById('pc-bingo');
const numbersBingo = document.getElementById('numbers');
const buttonElement = document.getElementById('button');
let userPlay;
const buttonBack = event => {
  userPlay = event.target.dataset.button;
};
