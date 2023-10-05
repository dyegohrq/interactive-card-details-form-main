const form = document.querySelector('.form');
const cardholderName = document.querySelector('#cardholder-name');
const spnName = document.querySelector('.name');
const cardNumber = document.querySelector('#Card-number');
const txtCard = document.querySelector('.txt-card');

form.addEventListener('submit', (e) => {
    e.preventDefault();
});

cardholderName.addEventListener('keyup', () => {
    let cardholderNameV = cardholderName.value;

    spnName.innerHTML = cardholderNameV.toUpperCase();
});

cardNumber.addEventListener('keyup', () => {
    let cardNumberValue = cardNumber.value;

    txtCard.innerHTML = cardNumberValue;
    
});

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