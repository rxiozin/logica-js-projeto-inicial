const Dono = "Raiozin";
alert(`Seja Bem vindo ao Jogo do número secreto malvadeza do ${Dono}`);
let SecretNumber = 14;
let chute = prompt("Choose a number between 1 and 20");

// if the shoot is equal to the secret number
if (chute == SecretNumber) {
  alert(`You the guy! You Found the ${SecretNumber}`);
} else {
  if (SecretNumber > chute) {
    alert("O numero secreto é maior do que esse que você escolheu");
  } else {
    alert("O numero secreto é menor do que esse que você escolheu");
  }
}
