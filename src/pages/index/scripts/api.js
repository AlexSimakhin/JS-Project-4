import toastr from 'toastr';

import { base } from '../../../constants';
import { loginValidator } from './validators/login';

export const api = Object.freeze({
  login: {
    fetch: async ({ email, password }) => {
      const credentials = { email, password };
      const isValid = loginValidator(credentials);

      if (!isValid) {
        const message = 'Форма заполнена не верно, пожалуйста введите правильно почту и пароль. Пароль должен содержать минимум 8 символов';
        
        toastr.error(message, 'Ошибка!');
        throw new Error(message);
      }

      const response = await fetch(`${base}/login`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if(!response.ok) {
        const { message } = await response.json();

        toastr.error(message, 'Ошибка!');
        throw new Error(message);
      }

      const { data } = await response.json();
      localStorage.setItem('token', data);
      localStorage.setItem('email', email);
      window.location.href = 'dashboard.html';
    },
  },
});