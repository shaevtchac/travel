import { Splide } from '@splidejs/splide';

const nav = document.querySelector('nav');

document.getElementById('menu-toggle').addEventListener('click', function () {
  nav.classList.toggle('menu-open');
  const currentAriaExpanded = this.getAttribute('aria-expanded') === 'true';
  this.setAttribute('aria-expanded', !currentAriaExpanded);
  console.log(this.getAttribute('aria-expanded'));
});

const carousel = document.querySelector('.splide');
const splide = new Splide(carousel, { pagination: false });
splide.mount();
