import Inputmask from 'inputmask';
import JustValidate from 'just-validate';
// TODO: Добавить валидацию к полям в модальном окне с помощью JustValidate
// TODO: "Имя" "Фамилия" обязательно для заполнения, минимум 2 символа без цифр
// TODO: "Телефон" обязательно для заполнения и добавить маску номера телефона
// TODO: с помощью inputMask
const inputTel = document.querySelector('.booking__tel input');
const telMask = new Inputmask('+7 (999) 999-99-99');
telMask.mask(inputTel);

const justValidate = new JustValidate('.booking__form');
justValidate
    .addField('#name-input', [
      {
        rule: 'required',
        errorMessage: 'Укажите ваше имя',
      }, {
        rule: 'minLength',
        errorMessage: 'Минимальная длина - 2 символа',
        value: 2,
      },
      {
        rule: 'customRegexp',
        value: /^[A-Za-zА-Яа-яЁё\s]+$/,
        errorMessage: 'Имя должно содержать только буквы',
      },
    ])
    .addField('#date-input', [
      {
        rule: 'required',
        errorMessage: 'Укажите дату',
      },
    ])
    .addField('#time-input', [
      {
        rule: 'required',
        errorMessage: 'Укажите время',
      },
    ])
    .addField('#tel-input', [
      {
        rule: 'required',
        errorMessage: 'Укажите ваш телефон',
      },
      {
        validator(value) {
          const phone = inputTel.inputmask.unmaskedvalue();
          return !!(Number(phone) && phone.length === 10); // => boolean
        },
        errorMessage: 'Телефон некорректный',
      },
    ])
    .addField('#count-input', [
      {
        rule: 'required',
        errorMessage: 'Укажите количество',
      },
      {
        rule: 'number',
        errorMessage: 'Введите число',
      },
      {
        rule: 'integer',
        errorMessage: 'Введите целое число',
      },
    ])
    .addField('#surname-input', [
      {
        rule: 'required',
        errorMessage: 'Укажите вашу фамилию',
      },
      {
        rule: 'minLength',
        errorMessage: 'Минимальная длина - 2 символа',
        value: 2,
      },
      {
        rule: 'customRegexp',
        value: /^[A-Za-zА-Яа-яЁё\s]+$/,
        errorMessage: 'Фамилия должна содержать только буквы',
      },
    ])
    .addField('#email-input', [
      {
        rule: 'required',
        errorMessage: 'Укажите ваш e-mail',
      },
      {
        rule: 'email',
        errorMessage: 'E-mail неверный',
      },
    ]);
