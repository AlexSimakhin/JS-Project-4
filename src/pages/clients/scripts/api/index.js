import {base} from '../../../../constants';


export function getClients (number) {
  const resp = async () => {

    const response = await fetch(`${base}/clients`,
      {
        method: 'GET', headers :  {
          'x-token': localStorage.getItem('token'),
        },
        meta:{
          'page' : number.toString(),
          'limit ' : '2',
        },
      },
    );
    if (response.status >= 200 && response.status < 300) {
      let res = await response.json();
      return res.data;
    }
  };

  return resp();
}
