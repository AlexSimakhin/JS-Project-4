// в папке common необходимо разрабатывать лгику которая должна будет работать
// на всех страницаъ
import moment from 'moment';
import {apiProf} from './profile';

const {profile} = apiProf;
const {get, put, update} = profile;

const strQuery = (query={}) => {
  return (
    Object.entries(query)
      .filter(([, value]) => typeof value !== 'undefined')
      .map((e) => e.join('='))
      .join('&')
  );
};

const formatDate = (value) => value ? moment(value).locale('ru').format('DD MMM YYYY') : '-';

export { strQuery, formatDate, get as profileGet, put as profilePut, update as profileUpdate };

