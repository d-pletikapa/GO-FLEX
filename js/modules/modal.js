document.body.insertAdjacentHTML('afterbegin', `
<div class="modal-window modal-window--overlay modal-window--visible">

  <div class="modal-window__block">
    <button class="modal-window--close" title="close pop-up window">
    <svg width="42" height="42" viewBox="0 0 42 42" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<rect y="38.4407" width="54.3632" height="5.03363" rx="2" transform="rotate(-45 0 38.4407)" />
<rect x="3.55957" width="54.3632" height="5.03363" rx="2" transform="rotate(45 3.55957 0)" />
</svg>
</button>
    <div class="modal-window-main--wrapper">
      <h3 class="modal-window__title">Заказать звонок</h3>
      <form class="modal-window__form" id="modal-window__form"
            action="https://jsonplaceholder.typicode.com/posts" method="POST" enctype="application/x-www-form-urlencoded">
        <fieldset class="modal-window__list">
  
          <label class="modal-window__item modal-window__item--name">
            <span class="modal-window__legend-name">Имя</span>
            <input name="product-name" type="text" required="required">
          </label>
  
          <label class="modal-window__item modal-window__item--phone">
            <span class="modal-window__legend-phone">Телефон</span>
            <input name="phone" type="number" required="required">
          </label>
        </fieldset>
      </form>
    </div>
    <div class="modal-window__footer">
      <button class="modal-window__send-btn" type="submit" form="modal-window__form">Позвонить мне
      </button>
    </div>
  </div>
</div>
`);

const modal = document.querySelector('.modal-window--overlay');
const callBtn = document.querySelector('.header__call-back-order');
callBtn.addEventListener('click', () => {
  modal.classList.remove('modal-window--visible');
});

modal.addEventListener('click', ({target}) => {
  if (target === modal || target.closest('.modal-window--close')) {
    modal.classList.add('modal-window--visible');
  }
});
