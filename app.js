const Dono = "Raiozin";
alert(`Seja Bem vindo ao Jogo do número secreto malvadeza do ${Dono}`);
let SecretNumber = 14;
let chute = prompt("Choose a number between 1 and 20");

  // if the shoot is equal to the secret number
  if (chute == SecretNumber) {
    break;
  } else {
    if (SecretNumber > chute) {
      alert(`O numero secreto é maior que ${chute}`);
    } else {
      alert(`O numero secreto é menor que ${chute}`);
    }
    // tentativas = tentativas + 1
    tentativas++;
  }
}

let palavraTentativa = tentativas > 1 ? "tentavivas" : "tentativa";

 if (tentativas > 1) {
  alert(
    `Isso aí! Você descobriu o ${SecretNumber} com ${tentativas} tentativas`
  );
} else {
  alert(
    `Isso aí, Você descobriu o ${SecretNumber} com ${tentativas} tentativa`
  );
}
