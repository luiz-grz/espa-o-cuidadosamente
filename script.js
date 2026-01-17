// Cria o iframe do mapa (fora da função para não recriar toda hora)
const iframe = document.createElement('iframe');
iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.657152182816!2d-43.09192058446588!3d-22.887379344545836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f7c27006e499%3A0xd6a2c0a14506b39a!2sEspa%C3%A7o%20CuidadosaMente!5e0!3m2!1spt-BR!2sbr!4v1686570546977!5m2!1spt-BR!2sbr";
iframe.loading = "lazy";
iframe.allowFullscreen = true;
iframe.referrerPolicy = "no-referrer-when-downgrade";
iframe.style.border = "0";
iframe.style.width = "100%";
iframe.style.height = "400px";
iframe.style.borderRadius = "12px";
iframe.style.boxShadow = "0 6px 20px rgba(0,0,0,0.15)";

// Função para carregar o mapa
function loadMap() {
  const mapContainer = document.querySelector('.map-container');
  if (!mapContainer) return;

  mapContainer.innerHTML = ''; // limpa conteúdo anterior

  // Texto acima do mapa
  const text = document.createElement('p');
  text.textContent = 'Venha nos conhecer!';
  text.classList.add('map-text');
  text.style.textAlign = 'center';
  text.style.fontWeight = '600';
  text.style.marginBottom = '1rem';
  text.style.color = '#173E43';

  mapContainer.appendChild(text);
  mapContainer.appendChild(iframe);
}

// Avaliações mock
const mockReviews = [
  {
    author_name: "Paola Azevedo",
    rating: 5,
    text: "Equipe eficiente e acolhedora. O espaço é lindo e aconchegante.",
  },
  {
    author_name: "Tatiane Pontes",
    rating: 5,
    text: "A minha experiência na clínica Espaço Cuidadosamente tem sido muito boa! A psicóloga Mariana que atende a minha filha, tem sido muito importante nas nossas vidas. É uma profissional maravilhosa!!!",
  },
  {
    author_name: "Robson Moraes",
    rating: 5,
    text: "Profissionais maravilhosos!! Todos tem um cuidado super especial conosco. Parabéns e continuem sempre assim.",
  },
];

// Função para criar as estrelas
function createStars(rating) {
  let stars = '';
  for(let i = 1; i <= 5; i++) {
    stars += i <= rating ? '★' : '☆';
  }
  return stars;
}

// Renderiza as avaliações
function displayReviews(reviews) {
  const reviewsContainer = document.getElementById('reviews-container');
  if (!reviewsContainer) return;

  reviewsContainer.innerHTML = '';

  reviews.forEach(({ author_name, rating, text }) => {
    const reviewDiv = document.createElement('div');
    reviewDiv.classList.add('review');
    reviewDiv.innerHTML = `
      <div class="author">${author_name} - <span class="rating" style="color: #b30000;">${createStars(rating)}</span></div>
      <div class="text">${text}</div>
    `;
    reviewsContainer.appendChild(reviewDiv);
  });
}

// Configura menu mobile toggle e outras inicializações
window.addEventListener('DOMContentLoaded', () => {
  // Menu Mobile Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navMenu = document.getElementById('nav-menu');

  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const expanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', !expanded);
      navMenu.classList.toggle('show');
      mobileMenuBtn.classList.toggle('open');
    });

    // Fecha menu ao clicar em links
    document.querySelectorAll('.nav-menu a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('show');
        mobileMenuBtn.setAttribute('aria-expanded', false);
        mobileMenuBtn.classList.remove('open');
      });
    });
  }

  // Renderizar avaliações
  displayReviews(mockReviews);

  // Carregar imagens da galeria
  const galleryContainer = document.getElementById('gallery');
  if (galleryContainer) {
    const imageUrls = [
      'WhatsApp Image 2025-05-16 at 11.50.38 (1).jpeg',
      'WhatsApp Image 2025-05-16 at 11.50.38.jpeg',
      'WhatsApp Image 2025-05-15 at 14.36.09.jpeg',
      'WhatsApp Image 2025-05-16 at 11.50.39 (1).jpeg',
      'WhatsApp Image 2025-05-15 at 14.36.09 (1).jpeg',
      'WhatsApp Image 2025-05-16 at 11.50.40 (1).jpeg',
      'WhatsApp Image 2025-05-16 at 11.50.41.jpeg',
    ];

    imageUrls.forEach(url => {
      const img = document.createElement('img');
      img.src = url;
      img.alt = 'Foto da clínica';
      img.classList.add('gallery-image');
      galleryContainer.appendChild(img);
    });
  }

  // Animações suaves ao rolar a página (Intersection Observer)
  const elements = document.querySelectorAll('.contact, .map-container');
  if (elements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
  }

document.addEventListener("DOMContentLoaded", function () {
  loadMap();
});

function loadMap() {
  const iframe = document.querySelector(".map-container iframe");
  if (iframe) {
    iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.443315313823!2d-43.10809968504697!3d-22.928964784999444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997fe7debb3e8a0%3A0x5a6ef57b1a6d3f98!2sEstr.%20Caetano%20Monteiro%2C%20818%20-%20Badu%2C%20Niter%C3%B3i%20-%20RJ%2C%2024320-570!5e0!3m2!1spt-BR!2sbr!4v1694682671234!5m2!1spt-BR!2sbr";
  }
}


});
