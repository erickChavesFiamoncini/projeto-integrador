// script.js
let balancaMovendo = true;

function balanca() {
    if (balancaMovendo) return;
    balancaMovendo = false;

    // Movimentação da balança para cima
    pratoEsquerdo.style.transform = "translateY(-30px)";
    pratoDireito.style.transform = "translateY(30px)";

    setTimeout(() => {
        // Movimentação da balança para baixo
        pratoEsquerdo.style.transform = "translateY(30px)";
        pratoDireito.style.transform = "translateY(-30px)";
    }, 500);

    setTimeout(() => {
        balancaMovendo = false;
    }, 1000);  // Tempo até o próximo movimento
}

// Iniciar a animação
setInterval(balanca, 1000); // Chama a função a cada 1 segundo
//

//CÓDIGO CONTAS

let comida = document.getElementById("alimento");
let comida2 = document.getElementById("alimento2");
let resultado = document.getElementById("resultado");

function atualizarBalanca() {
    let pratoEsquerdo = document.getElementById("pratoEsquerdo");

    let calorias = comida.selectedOptions[0].dataset.calorias;
    let calorias2 = comida2.selectedOptions[0].dataset.calorias2;

    //Escolhendo nome
    let prato = comida.selectedOptions[0].dataset.nome;
    let prato2 = comida2.selectedOptions[0].dataset.nome;
    console.log(prato)
    console.log(prato2)

    //Cálculo de calorias
    let numeroItens = Math.ceil(calorias / calorias2);

    // Limita o número máximo de itens a 10
    let numeroItensExibidos = Math.min(numeroItens, 10);
    

    // Atualiza o prato esquerdo com o alimento não saudável    
    pratoEsquerdo.className = "fa-solid " + comida.value;

    resultado.innerHTML = ""; // Limpa o prato direito antes de adicionar novos elementos

    for (let i = 0; i < numeroItensExibidos; i++) {
        let icon = document.createElement("i");
        icon.classList = "fa-solid " + comida2.value;

        resultado.appendChild(icon);

        //}
        //}
        // Adiciona a cor conforme o alimento selecionado
        if (comida2.value === "fa-apple-whole") {
            icon.classList.add("maca");
        } else if (comida2.value === "fa-carrot") {
            icon.classList.add("cenoura");
        } else if (comida2.value === "fa-leaf") {
            icon.classList.add("salada");
        } else if (comida2.value === "fa-egg") {
            icon.classList.add("ovo");
        }

        resultado.appendChild(icon);
    }
    //Mensagem
    let mensagem;
    if (numeroItens <= 10){
        mensagem = `1 ${prato} equivale a ${numeroItens} ${prato2} em termos de calorias.`;
    }
    else if (numeroItens > 10) {
        mensagem = `1 ${prato} equivale a ${numeroItens} ${prato2} em termos de calorias, mas exibimos apenas 10 para visualização.`;
    }
    
    document.getElementById(`mensagem`).innerText = mensagem;
    //
}

comida.addEventListener("change", atualizarBalanca);
comida2.addEventListener("change", atualizarBalanca);

//




