import dietas from "./dietas.js";
let radio = document.querySelector(`.manual-btn`);
let opcoes = document.querySelectorAll(`.bult`);
let sexos = document.querySelectorAll(`.sexoOpcao`);
let resultado = document.querySelector(`.resultado`);
let confirmar = document.getElementById('confirmar');
let condicoes = document.querySelectorAll('.condicao');
let dietaSelecionada = document.getElementById('dieta');
let sexoSelecionado = "";
let opcaoSelecionada = "";
let condicaoSelecionada = "";
let cont = 1;
let menu = document.getElementById('mobile-menu');

let opcoesDePeso = [
  {
    id: 1,
    genero: "masc",
    tipo: "engordar",
    imagem: "src/stickman/fatman.png"
  },
  {
    id: 2,
    genero: "masc",
    tipo: "emagrecer",
    imagem: "src/stickman/man.png"
  },
  {
    id: 3,
    genero: "fem",
    tipo: "engordar",
    imagem: "src/stickman/fatwoman.png"
  },
  {
    id: 4,
    genero: "fem",
    tipo: "emagrecer",
    imagem: "src/stickman/woman.png"
  },
  {
    id: 5, 
    genero: "masc",
    tipo: "manter",
    imagem: "src/stickman/man.png"
  },
  {
    id: 6, 
    genero: "fem",
    tipo: "manter",
    imagem: "src/stickman/woman.png" 
  },
];

document.getElementById(`radio1`).checked = true;

document.addEventListener("click", (e) => {
  if ((e.target.classList.contains(`sexoOpcao`) || e.target.parentElement.classList.contains(`sexoOpcao`))) {
    const sexo = e.target.classList.contains(`sexoOpcao`) ? e.target : e.target.parentElement;
    selecionarSexo(sexo);
  } else if (e.target.classList.contains(`bult`) || e.target.parentElement.classList.contains(`bult`)) {
    const opcao = e.target.classList.contains(`bult`) ? e.target : e.target.parentElement;
    selecionarOpcao(opcao);
  } else if (e.target.classList.contains('condicao')) {
    const condicao = e.target;
    selecionarCondicao(condicao);
  }
});

confirmar.addEventListener('click', () => {
  showDiet();
});

function selecionarCondicao(condicao) {
  condicoes.forEach((c) => {
    c.classList.remove('selecionado');
  });
  condicao.classList.add('selecionado');
  condicaoSelecionada = condicao.id;
}

function selecionarSexo(sexo) {
  sexos.forEach((s) => {
    s.classList.remove(`selecionado`);
  });
  sexo.classList.add(`selecionado`);
  sexoSelecionado = sexo.id;
  showImage();
}

function selecionarOpcao(opcao) {
  opcoes.forEach((o) => {
    o.classList.remove(`selecionado`);
  });
  if (opcao) {
    opcaoSelecionada = opcao.id;
    opcao.classList.add(`selecionado`);
  } else {
    opcaoSelecionada = "";
  }
  showImage();
}

function showDiet() {
  if (!opcaoSelecionada || !condicaoSelecionada) {
    alert('Selecione uma opção e uma condição');
    return;
  }
  const dieta = dietas.find((d) => d.condicao == condicaoSelecionada && d.opcao == opcaoSelecionada);
  if (dieta) {
    dietaSelecionada.innerHTML = dieta.dieta;
  } else {
    dietaSelecionada.innerHTML = "Dieta não encontrada.";
  }
}

function showImage() {
  if (sexoSelecionado && opcaoSelecionada) {
    const opcao = opcoesDePeso.find((o) => o.genero === sexoSelecionado && o.tipo === opcaoSelecionada);
    if (opcao) {
      resultado.innerHTML = `<img src="${opcao.imagem}" alt="Imagem de ${sexoSelecionado} ${opcao.tipo}">`;
    } else {
      resultado.innerHTML = ``; 
    }
  } else {
    resultado.innerHTML = ``; 
  }
}



setInterval(() => {
  proximaImg();
}, 5000);

function proximaImg() {
  cont++;
  if (cont > 3) {
    cont = 1;
  }
  document.getElementById(`radio` + cont).checked = true;
}

class MobileNavbar {
  constructor(menuSelector, listSelector, linkSelector) {
    this.mobileMenu = document.querySelector(menuSelector);
    this.navList = document.querySelector(listSelector);
    this.navLinks = document.querySelectorAll(linkSelector);
    this.activeClass = "active";
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", () => {
      this.navList.classList.toggle(this.activeClass);
    });
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);

mobileNavbar.init();
