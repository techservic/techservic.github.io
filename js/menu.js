let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');

btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu');
    document.body.classList.add('no-scroll'); // Bloqueia rolagem
});

const fecharMenu = () => {
    menu.classList.remove('abrir-menu');
    document.body.classList.remove('no-scroll'); // Libera rolagem
};

menu.addEventListener('click', fecharMenu);
overlay.addEventListener('click', fecharMenu);
