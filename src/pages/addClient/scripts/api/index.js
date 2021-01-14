import {base} from '../../../../constants';

export const createClient = async(client) =>{
  const response = await fetch(`${base}/clients`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-token': localStorage.getItem('token'),
    },
    body: JSON.stringify(client),
  });

  let result = await response.json();
  return response.status;
};