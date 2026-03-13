let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativasRestantes = 3;

function chutar(){

//Entrada de dados
let chute = document.getElementById("valor").value;
let palpite = parseInt(valor.value)

let displayMensagem = document.getElementById("mensagem");
let displayTentativas = document.getElementById("tentativas");

if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        displayMensagem.textContent = "Por favor, digite um número entre 1 e 100.";
        return;
    }

    if (palpite === numeroSecreto) {
        displayMensagem.textContent = "🎉 Você acertou! Parabéns!";
        encerrarJogo();
    } else {
        tentativasRestantes--;

        if (tentativasRestantes > 0) {
            let dica = palpite < numeroSecreto ? "maior" : "menor";
            displayMensagem.textContent = `O número secreto é ${dica} que ${palpite}.`;
        } else {
            displayMensagem.textContent = `Você perdeu! O número era ${numeroSecreto}.`;
            encerrarJogo();
        }
    }

    displayTentativas.textContent = "Tentativas restantes: " + tentativasRestantes;

    chute.value = "";
    chute.focus();
}

function encerrarJogo() {
    document.getElementById("valor").disabled = true;
}