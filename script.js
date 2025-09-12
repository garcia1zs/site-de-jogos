function destacar(imgClicada) {
      const imagens = document.querySelectorAll(".conheça img");
      imagens.forEach(img => img.classList.remove("ativo"));
      imgClicada.classList.add("ativo");
    }

    const botao = document.getElementById('btnCarregar');
    const escondido = document.querySelector('.escondido');

    botao.addEventListener('click', () => {
      if (escondido.style.display === 'none' || escondido.style.display === '') {
        escondido.style.display = 'grid';
        botao.value = 'Mostrar menos';
      } else {
        escondido.style.display = 'none';
        botao.value = 'Carregar mais';
      }
    });
   

  function trocaimg(){
    let img = window.document.getElementById('ima')
    let ifr = window.document.getElementById('ifr')
    if(img.src.includes('img/silk.webp') && (ifr.src.includes('https://www.youtube.com/embed/6XGeJwsUP9c?si=0zAP7W6PWJKY9X7S'))){
      img.src = 'img/mafia.jpeg'
      ifr.src = 'https://www.youtube.com/embed/AMtLTi0koGE?si=KbYSsRyOqutWufvp'

    } else if(img.src.includes('img/mafia.jpeg') && (ifr.src.includes('https://www.youtube.com/embed/AMtLTi0koGE?si=KbYSsRyOqutWufvp'))){
      img.src = 'img/metal.webp'
      ifr.src = 'https://www.youtube.com/embed/sKMayCD1u3w?si=r0mtJvD-uoLsfc36'
    }else{
      img.src = 'img/silk.webp'
      ifr.src = 'https://www.youtube.com/embed/6XGeJwsUP9c?si=0zAP7W6PWJKY9X7S'

    }
  }
  function voltaimg(){
    let img = window.document.getElementById('ima')
    let ifr = window.document.getElementById('ifr')
    if(img.src.includes('img/silk.webp') && (ifr.src.includes('https://www.youtube.com/embed/6XGeJwsUP9c?si=0zAP7W6PWJKY9X7S'))){
      img.src = 'img/metal.webp'
      ifr.src = 'https://www.youtube.com/embed/sKMayCD1u3w?si=r0mtJvD-uoLsfc36'

    } else if(img.src.includes('img/mafia.jpeg') && (ifr.src.includes('https://www.youtube.com/embed/AMtLTi0koGE?si=KbYSsRyOqutWufvp'))){
      img.src = 'img/silk.webp'
      ifr.src = 'https://www.youtube.com/embed/6XGeJwsUP9c?si=0zAP7W6PWJKY9X7S'
    }else{
      img.src = 'img/mafia.jpeg'
      ifr.src = 'https://www.youtube.com/embed/AMtLTi0koGE?si=KbYSsRyOqutWufvp'

    }
  }
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