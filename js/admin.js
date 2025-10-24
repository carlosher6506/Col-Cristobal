const form = document.getElementById('image-upload-form');
const carouselContainer = document.getElementById('carousel-container');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const file = event.target.elements['image-input'].files[0];
  if (file) {
    const reader = new FileReader();

    reader.onload = () => {
      const img = document.createElement('img');
      img.src = reader.result;
      carouselContainer.appendChild(img);

      // Guardar la imagen cargada en el localStorage
      const images = JSON.parse(localStorage.getItem('carouselImages')) || [];
      images.push(reader.result);
      localStorage.setItem('carouselImages', JSON.stringify(images));
    };

    reader.readAsDataURL(file);
  }
});

// Script para el carrusel
let slideIndex = 1;
showSlides(slideIndex);

// Obtener las imágenes guardadas en el localStorage
const savedImages = JSON.parse(localStorage.getItem('carouselImages')) || [];

// Agregar las imágenes guardadas al carrusel
const carouselInner = document.querySelector('.carousel-inner');
savedImages.forEach((imgSrc, index) => {
  const slide = document.createElement('div');
  slide.classList.add('slide');

  const img = document.createElement('img');
  img.src = imgSrc;
  img.alt = `Imagen ${index + 1}`;

  slide.appendChild(img);
  carouselInner.appendChild(slide);
});

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}