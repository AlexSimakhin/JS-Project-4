// api доступное всем
import toastr from 'toastr';
import { strQuery } from  './index';

export const api = Object.freeze({
  getLeads: {
    fetch: async (query) => {
      const token = localStorage.getItem('token');
      const response = await fetch(`https://lab.lectrum.io/js2/api/crm/leads?${strQuery(query)}`, {
        method: 'GET',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
          'x-token': token,
        },
      });

      if(!response.ok) {
        const { message } = await response.json();

        toastr.error(message, 'Ошибка!');
        throw new Error(message);
      }

      const responseJson = await response.json();
      return responseJson;
    },
  },
  getUsers: {
    fetch: async ({ query }) => {
      const token = localStorage.getItem('token');
      const response = await fetch(`https://lab.lectrum.io/js2/api/crm/users?${strQuery(query)}`, {
        method: 'GET',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
          'x-token': token,
        },
      });

      if(!response.ok) {
        const { message } = await response.json();

        toastr.error(message, 'Ошибка!');
        throw new Error(message);
      }

      const responseJson = await response.json();
      return responseJson;
    },
  },
  putUser: {
    fetch: async ({hash, body}) => {
      const token = localStorage.getItem('token');
      const response = await fetch(`https://lab.lectrum.io/js2/api/crm/users/${hash}`, {
        method: 'PUT',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
          'x-token': token,
        },
        body: JSON.stringify(body),
      });

      if(!response.ok) {
        const { message } = await response.json();

        toastr.error(message, 'Ошибка!');
        throw new Error(message);
      }
      else{
        toastr.success('Статус обновлен', 'Удача');
        setTimeout(() => {
          document.location.reload();
        }, 1000);
      }
    },
  },
  deleteUser: {
    fetch: async ({hash}) => {
      const token = localStorage.getItem('token');
      const response = await fetch(`https://lab.lectrum.io/js2/api/crm/users/${hash}`, {
        method: 'DELETE',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
          'x-token': token,
        },
      });

      if(!response.ok) {
        const { message } = await response.json();
        toastr.error(message, 'Ошибка!');
        throw new Error(message);
      }

      else{
        toastr.success('Юзер удален', 'Удача');
        setTimeout(() => {
          document.location.reload();
        }, 1000);
      }
    },
  },
  getClients: {
    fetch: async (query) => {
      const token = localStorage.getItem('token');
      const response = await fetch(`https://lab.lectrum.io/js2/api/crm/clients?${strQuery(query)}`, {
        method: 'GET',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
          'x-token': token,
        },
      });

      if(!response.ok) {
        const { message } = await response.json();

        toastr.error(message, 'Ошибка!');
        throw new Error(message);
      }

      const responseJson = await response.json();
      return responseJson;
    },
  },
  getTags: {
    fetch: async (query) => {
      const token = localStorage.getItem('token');
      const response = await fetch(`https://lab.lectrum.io/js2/api/crm/settings/tags?${strQuery(query)}`, {
        method: 'GET',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
          'x-token': token,
        },
      });

      if(!response.ok) {
        const { message } = await response.json();

        toastr.error(message, 'Ошибка!');
        throw new Error(message);
      }

      const responseJson = await response.json();
      return responseJson;
    },
  },
  updateTags: {
    fetch: async ({ query, body }) => {
      const token = localStorage.getItem('token');
      const response = await fetch('https://lab.lectrum.io/js2/api/crm/settings/crm/profile', {
        method: 'PUT',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
          'x-token': token,
        },
        body: body,
      });

      if(!response.ok) {
        const { message } = await response.json();

        toastr.error(message, 'Ошибка!');
        throw new Error(message);
      }

      const responseJson = await response.json();
      return responseJson;
    },
  },
});
