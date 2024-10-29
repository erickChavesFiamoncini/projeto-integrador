let radio = document.querySelector(`.manual-btn`)
let opcoes = document.querySelectorAll(`.bult`)
let sexos = document.querySelectorAll(`.sexo`)
let resultado = document.querySelector(`.resultado`)
let sexoSelecionado = ""
let cont = 1
let opcoesDePeso = [
    {
        id: 1,
        genero: "masc",
        tipo: "engordar",
        imagem: "" //colocar caminho da imagem
    },
    {
        id: 2,
        genero: "masc",
        tipo: "emagrecer",
        imagem: "" //colocar caminho da imagem
    },
    {
        id: 3,
        genero: "fem",
        tipo: "engordar",
        imagem: "" //colocar caminho da imagem
    },
    {
        id: 4,
        genero: "fem",
        tipo: "emagrecer",
        imagem: "" //colocar caminho da imagem
    },
]

document.getElementById(`radio1`).checked = true

opcoes.forEach((opcao) => {
    opcao.addEventListener("click", () => {
        showImage()
    })
})

sexos.forEach((sexo) => {
    sexo.addEventListener("click", () => {
        alert('clicado1 ')
        selecionarSexo(sexo)
    })
})

function selecionarSexo(sexo) {
    alert(sexo)
    // sexos.forEach((sexoSub) => {
    //     alert('2')
    //     if (sexoSub.id == sexo.id) {
    //         sexoSelecionado = sexo.id
    //         sexo.classList.add(`selecionado`)
    //     } else {
    //         sexo.classList.remove(`selecionado`)
    //     }
    // })
}

function showImage() {

}

setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg() {
    cont++

    if (cont > 3) {
        cont = 1
    }

    document.getElementById(`radio` + cont).checked = true
}