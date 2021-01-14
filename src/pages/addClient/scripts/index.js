import '../../../css/style.scss';
import {ClientValidator} from './validations/index';
import toastr from 'toastr';
import {createClient} from './api';

const formClient = document.getElementById('formClient');
const creator = document.getElementById('creator');
creator.value = localStorage.getItem('email');

if (formClient) {
  formClient.onsubmit = (event) => {
    event.preventDefault();
    const name = document.getElementById('clientName').value;
    const email = document.getElementById('clientMail').value;
    const phone = document.getElementById('clientTel').value;
    let password = document.getElementById('clientSurname').value;
    password += name;

    const credentials = { name, email, phone, password };
    const isValid = ClientValidator(credentials);

    if (!isValid) {
      const message = 'Форма заполнена не верно, пожалуйста введите правильно поля. Почта должны быть корректной. Телефон должен содержать минимум 10 символов';
      ' Фамилия + Имя должны содержать минимум 8 символов';

      toastr.error(message, 'Ошибка!');
      throw new Error(message);
    }

    let client = {
      'name': name,
      'email': email,
      'phone': phone,
      'password': password,
    };

    const promise = createClient(client).then((status) => {
      if (status >= 200 && status < 300) {
        document.location = 'clients.html';
      }
    });

  };
};

function handlerCancel(event) {
  const cancelButton = event.target.classList.contains('outline__btn');
  if (cancelButton){
    document.location = 'clients.html';
  }
}

if(formClient){
  formClient.addEventListener('click', handlerCancel);
}

