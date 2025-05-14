const menuBtn = document.getElementById('menu-btn');
const nav = document.querySelector('nav ul');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
});
