const menu = document.querySelector('.menu-icon');

menu.addEventListener('click', toggleMenu);

function toggleMenu(e) {

  console.log('menu...')

  const menuItems = document.querySelector('.MenuItems');

  menuItems.style.display = 'block';

  e.preventDefault();
}



window.addEventListener('scrollY', scrollerEvent);

function scrollerEvent(e) {
  if(window.scrollY > 150) {
    document.querySelector('.navbar').style.backgroundColor = 'white';
    document.querySelector('.navbar').style.backgroundPosition = 'fixed';
  }
e.preventDefault();
}