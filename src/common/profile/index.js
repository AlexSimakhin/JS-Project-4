// eslint-disable-next-line import/namespace
import {auth} from '../auth';
import {base} from '../../constants';

export const apiProf = Object.freeze({
  profile: {
    get: async()=>{
      let response = await auth();
      response = await fetch(`${base}/profile`,{
        method: 'GET', headers :
          {
            'x-token': localStorage.getItem('token'),
          },

      });
      if (response.status >= 200 && response.status < 300){
        const data = await response.json();
        return data;
      }
      else{
        localStorage.removeItem('token');
        window.location.href = 'index.html';
      }
    },
    put: async (name, email, phone, pass, role) => {
      let response = await auth();
      response = await fetch(`${base}/profile`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.status < 200 || response.status >= 300){
        localStorage.removeItem('token');
        window.location.href = 'index.html';
      }
    },
    update: async()=>{

    },
  },
});

