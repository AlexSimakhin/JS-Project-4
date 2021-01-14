import '../../../css/style.scss';
import { api } from './api';

const formInputs = document.querySelectorAll('.form form input');
const form = document.querySelector('.form form');

for (const input of formInputs) {
  if (input.type !== 'submit') {
    input.addEventListener('input', (event) => {
      if (event.target.value && event.target.value.length) {
        event.target.classList.add('filled');
      } else {
        event.target.classList.remove('filled');
      }
    });
  }
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  const name = formData.get('name');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const password = formData.get('password');

  await api.signUp.fetch({ name, phone, email, password });
});