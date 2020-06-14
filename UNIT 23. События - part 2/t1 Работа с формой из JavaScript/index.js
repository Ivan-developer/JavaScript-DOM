//Работа с формой из JavaScript

const emailInputElem = document.querySelector('#email');
const passwordInputElem = document.querySelector('#password');
const emailErrorElem = document.querySelector('.error-text_email');
const passwordErrorElem = document.querySelector('.error-text_password');

// что бы проанализировать функцию onEmailChange
const isRequired = value => value ? undefined : 'Required';

// второй валидатор что в поле должен быть email
const isEmail = value => value.includes("@") ? undefined : 'Should be an email';

// вынесли в отдельный объект 
const validatorsByField = {
    email: [isRequired, isEmail],
    password: [isRequired],
}

// дублирование validate - вынесли в отдельную функцию 
const validate = (fieldName, value) => {
    const validators = validatorsByField[fieldName];
    return validators
        .map(validator => validator(value))
        .filter(errorText => errorText)
        .join(', ');
}

const onEmailChange = event => {
    const errorText = validate('email', event.target.value);
    emailErrorElem.textContent = errorText;
}
const onPasswordChange = event => {
    const errorText = validate('password', event.target.value);
    passwordErrorElem.textContent = errorText;
}

emailInputElem.addEventListener('input', onEmailChange);
passwordInputElem.addEventListener('input', onPasswordChange);

// для Submit
const formElem = document.querySelector('.login-form');

const onFormSubmit = event => { // event - объект события
    event.preventDefault(); // метод отменяет дефолтное поведение 
    // ниже - обрабатываем поле
    const formData = [...new FormData(formElem)] // через метод FormData(получили то что вели в инпуты) 
    // и через spread создали массив и с ним работаем
    // на каждом шаге принимает аккамулятор 
        .reduce((acc, [field, value]) => 
        ({...acc, [field]: value }), {});
    alert(JSON.stringify(formData)); 
    // у объекта JSON есть метод stringify(), который приобразует объект в строку
}

formElem.addEventListener('submit', onFormSubmit);