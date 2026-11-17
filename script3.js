
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
let wrapper = document.getElementById('swiper');


button.addEventListener('click', function() { 
  let isExpanded = wrapper.classList.toggle('expanded');
  if (isExpanded) {buttonText.textContent = 'Скрыть'} 
  else {buttonText.textContent = 'Показать все'};
  let btnIsExpanded = button.classList.toggle('expand-button--opened');
});
