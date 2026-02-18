function destacar(imgClicada) {
  const imagens = document.querySelectorAll(".conheça img");

  // Se a imagem já estiver ativa → remove
  if (imgClicada.classList.contains("ativo")) {
    imgClicada.classList.remove("ativo");
  } else {
    // Remove de todas
    imagens.forEach(img => img.classList.remove("ativo"));
    
    // Ativa a clicada
    imgClicada.classList.add("ativo");
  }
}

   
const apiKey = "S8dcfa32ed65c443cbeac5c235b19372d";
let atual = 0;
let jogos = [];

// Função para carregar lançamentos da API
async function carregarLancamentos() {
  try {
    const resposta = await fetch(
      `https://api.rawg.io/api/games?key=${apiKey}&dates=2025-01-01,2026-12-31&ordering=-released`
    );

    const dados = await resposta.json();

    // Pega os 5 primeiros lançamentos
    jogos = dados.results.slice(0, 5);
    atualizar();

  } catch (erro) {
    console.error("Erro ao carregar jogos:", erro);
  }
}

// Função para atualizar imagem e info
function atualizar() {
  if(jogos.length === 0) return;

  const img = document.getElementById('ima');
  const nome = document.getElementById('nomeJogo');
  const data = document.getElementById('dataJogo');

img.src = jogos[atual].background_image
  ? jogos[atual].background_image.replace("http://", "https://")
  : "img/placeholder.png";  nome.textContent = jogos[atual].name || "Sem nome";
  data.textContent = `Lançamento: ${jogos[atual].released || "Indefinida"}`;
}

// Próximo jogo
function trocaimg() {
  if(jogos.length === 0) return;
  atual++;
  if(atual >= jogos.length) atual = 0;
  atualizar();
}

// Jogo anterior
function voltaimg() {
  if(jogos.length === 0) return;
  atual--;
  if(atual < 0) atual = jogos.length - 1;
  atualizar();
}

// Chama a API quando a página carrega
document.addEventListener("DOMContentLoaded", carregarLancamentos);


  function scrollFranquias(direction) {
    const carousel = document.getElementById('fran-carousel');
    const scrollAmount = 350; // Ajuste para o tamanho do seu card + gap
    carousel.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
  }
  const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.item');
const totalItems = items.length;

let index = 0;

document.querySelector('.next').addEventListener('click', () => {
  index = (index + 1) % totalItems;
  updateCarousel();
});

document.querySelector('.prev').addEventListener('click', () => {
  index = (index - 1 + totalItems) % totalItems;
  updateCarousel();
});

function updateCarousel() {
  carousel.style.transform = `translateX(${-index * 100}%)`;
}
document.querySelectorAll('.video-thumb').forEach(thumb => {
  thumb.addEventListener('click', () => {
    const videoUrl = thumb.getAttribute('data-video');
    const iframe = document.createElement('iframe');
    iframe.src = videoUrl;
    iframe.frameBorder = "0";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    iframe.width = "560";
    iframe.height = "315";

    thumb.innerHTML = '';
    thumb.appendChild(iframe);
  });
});
console.log(jogos)