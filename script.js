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

   
  function trocaimg(){
    let img = window.document.getElementById('ima')
    let ifr = window.document.getElementById('ifr')
    if(img.src.includes('img/re9.jpg') && (ifr.src.includes('https://www.youtube.com/embed/RJ7eRQgJBbo?si=6qqNdSGxHeVRWixN'))){
      img.src = 'img/mafia.jpeg'
      ifr.src = 'https://www.youtube.com/embed/AMtLTi0koGE?si=KbYSsRyOqutWufvp'

    } else if(img.src.includes('img/mafia.jpeg') && (ifr.src.includes('https://www.youtube.com/embed/AMtLTi0koGE?si=KbYSsRyOqutWufvp'))){
      img.src = 'img/metal.webp'
      ifr.src = 'https://www.youtube.com/embed/sKMayCD1u3w?si=r0mtJvD-uoLsfc36'
    }else{
      img.src = 'img/re9.jpg'
      ifr.src = 'https://www.youtube.com/embed/RJ7eRQgJBbo?si=6qqNdSGxHeVRWixN'

    }
    }
 function voltaimg(){
    let img = window.document.getElementById('ima')
    let ifr = window.document.getElementById('ifr')
    if(img.src.includes('img/re9.jpg') && (ifr.src.includes('https://www.youtube.com/embed/RJ7eRQgJBbo?si=6qqNdSGxHeVRWixN'))){
      img.src = 'img/metal.webp'
      ifr.src = 'https://www.youtube.com/embed/sKMayCD1u3w?si=r0mtJvD-uoLsfc36'

    } else if(img.src.includes('img/mafia.jpeg') && (ifr.src.includes('https://www.youtube.com/embed/AMtLTi0koGE?si=KbYSsRyOqutWufvp'))){
      img.src = 'img/re9.jpg'
      ifr.src = 'https://www.youtube.com/embed/RJ7eRQgJBbo?si=6qqNdSGxHeVRWixN'
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

 const btn = document.getElementById('btnCarregar');
  const escondido = document.querySelector('.escondido');

  btn.addEventListener('click', () => {
    // Alterna entre mostrar/esconder
    if (escondido.style.display === 'none' || escondido.style.display === '') {
      escondido.style.display = 'grid'; // ou 'block', se preferir
      btn.value = "Mostrar menos";       // muda o texto do botão
    } else {
      escondido.style.display = 'none';
      btn.value = "Carregar mais";
    }
  });