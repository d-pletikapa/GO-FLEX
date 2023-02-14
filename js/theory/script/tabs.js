const tabsBtnsWrapper = document.querySelector('.tabs__buttons');
const tabsBtns = document.querySelectorAll('.tabs__btn');
const tabsItems = document.querySelectorAll('.tabs__item');

// делегирование с dataset
tabsBtnsWrapper.addEventListener('click', ({target}) => {
  if (target.matches('.tabs__btn')) {
    tabsBtns.forEach(btn => {
      if (btn === target) {
        btn.classList.add('tabs__btn_active');
      } else {
        btn.classList.remove('tabs__btn_active');
      }
    });

    tabsItems.forEach(elem => {
      if (elem.dataset.tabs === target.dataset.tabs) {
        elem.classList.add('tabs__item_active');
      } else {
        elem.classList.remove('tabs__item_active');
      }
    });
  }
});

// просто табы

// tabsBtns.forEach(
//     (btn, indexBtn) => {
//       btn.addEventListener('click', () => {
//         tabsItems.forEach((items, indexItems) => {
//           if (indexBtn === indexItems) {
//             tabsBtns[indexItems].classList.add('tabs__btn_active');
//             items.classList.add('tabs__item_active');
//           } else {
//             tabsBtns[indexItems].classList.remove('tabs__btn_active');
//             items.classList.remove('tabs__item_active');
//           }
//         });
//       });
//     });

