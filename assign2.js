const form = document.querySelector('form');
const inputField = document.querySelector('#input-field');
const submitButton = document.querySelector('#submit-button');
const errorMessage = document.querySelector('#error-message');

submitButton.addEventListener('click', (event) => {
  // Prevent the form from submitting
  event.preventDefault();

  // Check the value of the input field
  const inputValue = inputField.value;
  if (inputValue !== 'correct value') {
    errorMessage.innerHTML = 'Error: incorrect value';
  } else {
    errorMessage.innerHTML = '';
    form.submit();
  }
});
