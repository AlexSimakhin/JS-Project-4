import {base} from '../../constants';

export function auth () {
  const resp = async () => {
    const response = await fetch(`${base}/auth`,
      {
        method: 'GET', headers :
            {
              'x-token': localStorage.getItem('token'),
            },
      },
    );
    if (response.status >= 200 && response.status < 300) {
      return response.status;
    }
  };

  return resp();
}


