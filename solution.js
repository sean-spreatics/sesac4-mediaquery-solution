// js 
const icon_menu = document.querySelector('.icon_menu');
const slide_menu = document.querySelector('.slide_menu');

icon_menu.addEventListener('click', () => {
    slide_menu.classList.toggle('d-none');
});

// jQuery
// const icon_menu = $('.icon_menu');
// const slide_menu = $('.slide_menu');

// icon_menu.on('click', () => {
//     slide_menu.toggleClass('d-none');
// });
