const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header_nav');

navBtn.addEventListener('click', () => {
  navIcon.classList.toggle('nav-icon--active');
  nav.classList.toggle('header_nav--mobile');
  document.body.classList.toggle('no-scroll');
});
