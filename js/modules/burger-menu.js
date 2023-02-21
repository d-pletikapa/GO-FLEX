{
  const renderBurgerMenu = () => {
    document.body.insertAdjacentHTML('afterbegin', `
  <div class="burger-window burger-window--overlay burger-window--visible">
    <div class="burger-window__block">
      <div class="burger-window-main--wrapper">
        <h3 class="burger-window__title visually-hidden">Мобильное меню</h3>
         <ul class="burger__list">
          <li class="burger__item"><a href="#halls">залы</a></li>
          <li class="burger__item"><a href="#about-us">О нас</a></li>
          <li class="burger__item"><a href="#booking">Бронь</a></li>
          <li class="burger__item"><a href="#reviews">отзывы</a></li>
          <li class="burger__item"><a href="#contacts">Контакты</a></li>
         </ul>
      </div>
    <div class="modal-window__footer">
      <button class="burger__call-back-order burger__call-back-order--visible" name="burger__call-back-order" type="button" value="burger__call-back-order">Заказать звонок</button>
    </div>
  </div>
</div>
`);

    const burgerMenuBtn = document.querySelector('.header__menu-btn');
    const burgerMenuWindow = document.querySelector('.burger-window--overlay');

    const setMultipleAttributes = (elem, elemAttributes) => {
      Object.keys(elemAttributes).forEach(attribute => {
        elem.setAttribute(attribute, elemAttributes[attribute]);
      });
    };

    const openSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    setMultipleAttributes(openSvg, {
      width: '54',
      height: '29',
      viewBox: '0 0 54 29',
      fill: 'currentColor',
      xmlns: 'http://www.w3.org/2000/svg',
    });
    openSvg.insertAdjacentHTML('afterbegin', `
          <rect width="54" height="5" rx="2"></rect>
          <rect y="12" width="54" height="5" rx="2"></rect>
          <rect y="24" width="31" height="5" rx="2"></rect>
  `);
    const closeSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    setMultipleAttributes(closeSvg, {
      width: '42',
      height: '42',
      viewBox: '0 0 42 42',
      fill: 'currentColor',
      xmlns: 'http://www.w3.org/2000/svg',
    });
    closeSvg.insertAdjacentHTML('afterbegin', `
          <rect y="38.1838" width="54" height="5" rx="2" transform="rotate(-45 0 38.1838)"></rect>
          <rect x="3.53564" width="54" height="5" rx="2" transform="rotate(45 3.53564 0)"></rect>
  `);
    burgerMenuBtn.append(openSvg);
    return {
      burgerMenuBtn,
      burgerMenuWindow,
      openSvg,
      closeSvg,
    };
  };
  const burgerElems = renderBurgerMenu();
  // Animation
  const transformOffsetRight = 100.012;
  const transformOffsetLeft = -100.012;
  const duration = 900;
  let requestId = NaN;
  const easeInOut = (time) => 0.5 * (1 - Math.cos(Math.PI * time));

  const startAnimation = (duration, callback) => {
    let startAnimation = NaN; // задаем начало анимации
    requestAnimationFrame(function step(timestamp) {
      startAnimation ||= timestamp;
      const progress = (timestamp - startAnimation) / duration;
      callback(progress);
      if (progress < 1) {
        requestId = requestAnimationFrame(step);
      }
    });
  };

  const actionOverlay = (move) => {
    burgerElems.burgerMenuWindow.style.transform = `
    translateX(${move}%)`;
    // burgerElems.burgerMenuWindow.style.left = `
    // ${move}%`;
    burgerElems.burgerMenuWindow.style.opacity = `
    ${move / 100}`;
  };
  const burgerAction = () => {
    if (burgerElems.burgerMenuBtn.classList.contains('open')) {
      burgerElems.burgerMenuBtn.replaceChild(
          burgerElems.closeSvg, burgerElems.openSvg);
      startAnimation(duration, (progress) => {
        const move = easeInOut(progress) * transformOffsetRight;
        actionOverlay(move);
      });
      burgerElems.burgerMenuBtn.classList.toggle(
          'open');
      burgerElems.burgerMenuWindow.classList.toggle(
          'burger-window--visible');
    } else {
      burgerElems.burgerMenuBtn.replaceChild(
          burgerElems.openSvg, burgerElems.closeSvg);
      startAnimation(duration, (progress) => {
        const move = easeInOut(progress) * transformOffsetLeft;
        actionOverlay(move);
      });
      setTimeout(() => {
        burgerElems.burgerMenuBtn.classList.toggle(
            'open');
        burgerElems.burgerMenuWindow.classList.toggle(
            'burger-window--visible');
      }, duration, duration);
    }
  };
  // Events
  burgerElems.burgerMenuBtn.addEventListener('click', () => {
    burgerAction();
  });

  window.addEventListener('resize', () => {
    if (screen.width >= 1023 && burgerElems.burgerMenuBtn.contains(
        burgerElems.closeSvg)) {
      burgerElems.burgerMenuBtn.replaceChildren(
          burgerElems.openSvg);
      burgerElems.burgerMenuBtn.classList.toggle(
          'open');
      burgerElems.burgerMenuWindow.classList.toggle(
          'burger-window--visible');
    }
  });
}
