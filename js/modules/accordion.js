const buttons = document.querySelectorAll('.faq__btn');
const items = document.querySelectorAll('.faq__item');
const textWrapper = document.querySelectorAll('.faq__text-wrapper');

let heightWrapper = 0;
textWrapper.forEach(elem => {
  if (heightWrapper < elem.scrollHeight) {
    heightWrapper = elem.scrollHeight;
  }
});


buttons.forEach((btn, index) => {
  btn.addEventListener('click', ({target}) => {
    for (let i = 0; i < items.length; i += 1) {
      if (index === i) {
        textWrapper[i].style.height =
          items[i].classList.contains('faq--active') ?
            '' : `${heightWrapper}px`;
        // textWrapper[i].scrollHeight
        items[i].classList.toggle('faq--active');
      } else {
        items[i].classList.remove('faq--active');
        textWrapper[i].style.height = '';
      }
    }
    if (target.matches('.faq__btn')) {
      buttons.forEach(btn => {
        if (btn === target) {
          btn.classList.toggle('faq__btn--odd-active');
          btn.classList.toggle('faq__btn--even-active');
        } else {
          btn.classList.remove('faq__btn--odd-active');
          btn.classList.remove('faq__btn--even-active');
        }
      });
    }
  });
});
