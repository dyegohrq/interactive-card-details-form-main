const form = document.querySelector('.form');
const cardholderName = document.querySelector('#cardholder-name');
const spnName = document.querySelector('.name');
const cardNumber = document.querySelector('#Card-number');
const txtCard = document.querySelector('.txt-card');
const month = document.querySelector('#month');
const year = document.querySelector('#year');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputCard();
    checkInputM();
});

cardholderName.addEventListener('keyup', () => {
    let cardholderNameV = cardholderName.value;

    spnName.innerHTML = cardholderNameV.toUpperCase();
});

cardNumber.addEventListener('keyup', () => {
    let cardNumberValue = cardNumber.value;

    txtCard.innerHTML = cardNumberValue;
});

// .replace(/\d{4}/g, '')

function checkInputCard() {
    if (isNumber(cardNumber.value) === false) {
        setErrorFor(cardNumber, 'Wrong format, numbers only');
    } else {
        setSuccessFor(cardNumber);
    }
}

function checkInputM() {
    if (isNumber(month.value) === false) {
        setErrorFor(month, "Can't be blanck");
    } else {
        setSuccessFor(month);
    }
}

function isNumber(input) {
    return /^\d*$/i.test(input);
  }

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = document.querySelector('small');


    formControl.classList = 'form-control error';
    small.innerHTML = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.classList = 'form-control success';
}