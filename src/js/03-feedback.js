import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input');
const messageInput = document.querySelector('textarea');

const savedState = JSON.parse(localStorage.getItem('feedback-form-state'));

if (savedState) {
  emailInput.value = savedState.email || '';
  messageInput.value = savedState.message || '';
}

const saveFormState = () => {
  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(state));
};

form.addEventListener('input', throttle(saveFormState, 500));

form.addEventListener('submit', (event) => {
  event.preventDefault();
  localStorage.removeItem('feedback-form-state');

  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
    console.log(formData);
    emailInput.value = '';
    messageInput.value = '';
});


















// const inputForm = document.querySelector('form');
// inputForm.addEventListener('input', heandlerData);
// //inputForm.addEventListener('submit', heandlerSubmit)

// const data = {};

// function heandlerData(evt) {
//     data[evt.target.name] = evt.target.value;
//     localStorage.setItem("feedback-form-state", JSON.stringify(data));
    
    

// }
//console.log(data);
//console.log(localStorage.getItem('feedback-form-state'));