import toastr from 'toastr';
import { base, getToken } from '../../../constants';
import * as droplist from './components/droplist';
import { createLeadValidator } from './validators/createLead';

export const api = Object.freeze({
  getClients: {
    fetch: async () => {
      const response = await fetch(`${base}/clients`, {
        method: 'GET',
        headers: {
          'accept': 'application/json',
          'x-token': getToken(),
          'Content-Type': 'application/json',
        },
      });

      if(!response.ok) {
        const { message } = await response.json();

        toastr.error(message, 'Ошибка!');
        throw new Error(message);
      }

      const { data } = await response.json();
      droplist.createDroplistClients(data);
    },
  },
  getTags: {
    fetch: async () => {
      const response = await fetch(`${base}/settings/tags`, {
        method: 'GET',
        headers: {
          'accept': 'application/json',
          'x-token': getToken(),
        },
      });

      if(!response.ok) {
        const { message } = await response.json();

        toastr.error(message, 'Ошибка!');
        throw new Error(message);
      }

      const { data } = await response.json();
      droplist.createDroplistTags(data);
    },
  },
  createLead: {
    fetch: async ({ title, amount, pipeline, clientHash, status, deadline, comment }) => {
      const lead = { title, amount, pipeline, clientHash, status, deadline, comment };
      
      const isValid = createLeadValidator(lead);
      
      if (!isValid) {
        const message = 'Форма заполнена не полностью. Проверьте правильность заполнения полей.';
        
        toastr.error(message, 'Ошибка!');
        console.error(createLeadValidator.errors);
        throw new Error(message);
      }

      const response = await fetch(`${base}/leads`, {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'x-token': getToken(),
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(lead),
      });

      if(!response.ok) {
        const { message } = await response.json();

        toastr.error(message, 'Ошибка!');
        throw new Error(message);
      }

      window.location.href = 'leads.html';
    },
  },
});