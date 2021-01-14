import { base, getToken } from '../../../constants';
import { createLeads } from './components/leads/createLeads';

export const api = Object.freeze({
  getLeads: {
    fetch: async () => {
      const response = await fetch(`${base}/leads`, {
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
      
      createLeads(data);
    },
  },
  deleteLead: {
    fetch: async (hash) => {
      const response = await fetch(`${base}/leads/${hash}`, {
        method: 'DELETE',
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
    },
  },
  putLead: {
    fetch: async ({ title, amount, pipeline, status, deadline }, hash) => {
      const movedLead = { title, amount, pipeline, status, deadline };

      const response = await fetch(`${base}/leads/${hash}`, {
        method: 'PUT',
        headers: {
          'accept': 'application/json',
          'x-token': localStorage.getItem('token'),
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(movedLead),
      });

      if(!response.ok) {
        const { message } = await response.json();

        toastr.error(message, 'Ошибка!');
        throw new Error(message);
      }
    },
  },
});