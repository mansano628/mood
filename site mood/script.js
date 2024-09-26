let timer; // Variável para armazenar o timer
let countdown; // Variável para o countdown
const totalTime = 3600; // Total em segundos (60 minutos)

// Função que exibe a mensagem e a imagem de acordo com o sentimento escolhido
function showMessageAndImage() {
    const feelingSelect = document.getElementById("feelingSelect");
    const feeling = feelingSelect.value;
    const messageElement = document.getElementById("message");
    const imageElement = document.getElementById("image");
    const timerElement = document.getElementById("timer");
    const warningElement = document.getElementById("warning");

    if (feeling === "") {
        messageElement.textContent = "";
        imageElement.style.display = "none"; // Esconder imagem se nenhuma opção for selecionada
        return;
    }

    if (timer) {
        // Se já houver um timer, mostrar mensagem de aviso
        warningElement.textContent = "Espera um pouco, você é bipolar?";
        return;
    }

    // Reiniciar o aviso
    warningElement.textContent = "";

    // Define a mensagem e imagem com base na seleção
    if (feeling === "alegre") {
        messageElement.textContent = "UHUUUUU alegriaaaaa!! Te amo demais e amo mais ainda te ver feliz s2";
        imageElement.src = "alegre.jpg"; // Certifique-se de que a imagem existe
    } else if (feeling === "triste") {
        messageElement.textContent = "Proibido ficar triste ! ! ! Eu te amo demais e quero ver você sorrindo agora";
        imageElement.src = "triste.jpg";
    } else if (feeling === "com saudade") {
        messageElement.textContent = "Toma essa foto aleatória pra matar a saudade, vamos matar essa saudade jajaaaaa";
        imageElement.src = "saudade.jpg";
    } else if (feeling === "ansiosa") {
        messageElement.textContent = "Respire e inspire 3 vezes bem fundo. Vai dar tudo certo minha linda, eu acredito demais em você!";
        imageElement.src = "ansiosa.jpg";
    } else if (feeling === "concentrada") {
        messageElement.textContent = "É isso aí! Você é foda demais continue focada";
        imageElement.src = "concentrada.jpg";
    } else if (feeling === "brincalhona") {
        messageElement.textContent = "Então toma esse casal bonitão e mais uma piadinha ótima: O que a Lua disse pro Sol? -Nossa você é tão grande e não te deixam sair a noite!";
        imageElement.src = "brincalhona.jpg";
    } else if (feeling === "brava") {
        messageElement.textContent = "Nãaaao, nem você gostou de ver você brava. Sorri um pouco que jajá você esquece do porquê estava brava";
        imageElement.src = "brava.jpg";
    } else if (feeling === "sonolenta") {
        messageElement.textContent = "Xiiiiii se dormir vou tirar uma foto sua assim , então melhor ficar acordada hein hihi";
        imageElement.src = "sonolenta.jpg";
    } else if (feeling === "sacana") {
        messageElement.textContent = "Aí é só no 1 do whatsapp, mas se você está lendo isso mande o print para seu lindo namorado porque você acaba de ganhar um vale fotinho!";
        imageElement.src = "sacana.jpg";
    }

    imageElement.style.display = "block"; // Exibir a imagem
    imageElement.classList.add('show'); // Adiciona a classe para mostrar a imagem com transição

    // Desabilitar o seletor
    feelingSelect.disabled = true;

    // Iniciar o timer
    timer = setTimeout(() => {
        feelingSelect.disabled = false; // Reabilitar o seletor após 60 minutos
        messageElement.textContent = "Você pode escolher novamente!";
        imageElement.style.display = "none"; // Esconder a imagem
        timer = null; // Limpar o timer
        countdown = null; // Limpar o countdown
        timerElement.textContent = ""; // Limpar o texto do timer
    }, totalTime * 1000); // 3600000 milissegundos = 60 minutos

    // Iniciar contagem regressiva
    countdown = totalTime;
    const interval = setInterval(() => {
        if (countdown <= 0) {
            clearInterval(interval); // Limpar o intervalo quando o tempo acabar
            return;
        }
        const minutes = Math.floor(countdown / 60);
        const seconds = countdown % 60;
        timerElement.textContent = `Tempo restante: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        countdown--; // Decrementar o countdown
    }, 1000); // Atualizar a cada segundo
}
