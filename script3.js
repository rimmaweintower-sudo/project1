
const breakpoint = window.matchMedia('(max-width: 767px)');
let swiper = null;

function checkSlider() {
  if (breakpoint.matches) {
    if (!swiper) {
      swiper = new Swiper('.swiper', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    }
  } else {
    if (swiper) {
      swiper.destroy(true, true);
      swiper = null;
    }
  }
}

checkSlider();
breakpoint.addEventListener('change', checkSlider);


let button = document.querySelector('.expand-button');
let buttonText = document.querySelector('.expand-button__text');
let menuOpened = false;
let secrets = document.querySelectorAll('.swiper-slide--hidden');

let open = function () { 
    buttonText.textContent = 'Скрыть';
    button.classList.add('expand-button--opened');
    menuOpened = true;
    
    for (let i = 0; i < secrets.length; i++) {
        secrets[i].classList.remove('swiper-slide--hidden');}
        return secrets;
    return menuOpened;
};

let close = function () {
    buttonText.textContent = 'Показать все';
    button.classList.remove('expand-button--opened');
    menuOpened = false;
    
    for (let i = 0; i < secrets.length; i++) {
        secrets[i].classList.add('swiper-slide--hidden');}
        return secrets;
    return menuOpened;    
    };
button.addEventListener('click', function() { 
    
    if (menuOpened === false) { open() } else { close() } }
)