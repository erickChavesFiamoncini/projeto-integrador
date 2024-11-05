//Automático
let intervalo = 2500;


const radios = document.querySelectorAll('.slider input[type="radio"]');
let indiceAtual = 0;


function proximoSlide() {

    radios[indiceAtual].checked = false;


    indiceAtual = (indiceAtual + 1) % radios.length;


    radios[indiceAtual].checked = true;
}

//Ativações
setInterval(proximoSlide, intervalo);

document.addEventListener("DOMContentLoaded", function () {
    const botoesAuto = document.querySelectorAll('.navegacao-auto div');

    function atualizarBotoes() {
        botoesAuto.forEach(botao => {
            botao.classList.remove('active');
        });


        const primeiroRadio = document.getElementById('capa');
        if (primeiroRadio && primeiroRadio.checked) {
            botoesAuto[0].classList.add('active');
        }
    }


    const primeiroRadio = document.getElementById('capa');
    primeiroRadio.checked = true;
    atualizarBotoes();


    setInterval(() => {

        const radios = document.querySelectorAll('input[name="carrossel"]');
        let ativoIndex = Array.from(radios).findIndex(r => r.checked);
        radios[ativoIndex].checked = false;
        const nextIndex = (ativoIndex + 1) % radios.length;
        radios[nextIndex].checked = true;
        atualizarBotoes();
    }, 3000);

    botoesAuto.forEach((botao, index) => {
        botao.addEventListener('click', function () {
            document.getElementById(`radio${index + 1}`).checked = true;
            atualizarBotoes();
        });
    });
});


//Setas
document.addEventListener("DOMContentLoaded", function () {
    const radios = document.querySelectorAll('input[name="botao"]');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    // Função para mudar o slide
    function mudarSlide(operacao) {
        let ativoIndex = Array.from(radios).findIndex(r => r.checked);
        radios[ativoIndex].checked = false;

        let nextIndex;
        if (operacao === 'next') {
            nextIndex = (ativoIndex + 1) % radios.length; // Volta para o início
        } else if (operacao === 'prev') {
            nextIndex = (ativoIndex - 1 + radios.length) % radios.length; // Vai para o final
        }

        radios[nextIndex].checked = true;
    }

    // Adiciona eventos de clique para as setas
    nextButton.addEventListener('click', function () {
        mudarSlide('next');
    });

    prevButton.addEventListener('click', function () {
        mudarSlide('prev');
    });
});