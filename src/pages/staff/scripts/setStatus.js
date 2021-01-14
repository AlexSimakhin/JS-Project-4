import { api } from '../../../common/api';
import {statusItemTemplate} from './templates';

const statusArr = [
  'active',
  'frozen',
  'blocked',
];

const statusInfo = {
  active: {
    title: 'Активный',
    color: 'green',
  },
  frozen: {
    title: 'Заморожен',
    color: 'yellow',
  },
  blocked: {
    title: 'Заблокирован',
    color: 'red',
  },
};

const setStatus = async () => {
  const statusList = statusArr.reduce((acc, tag) => {
    acc += statusItemTemplate(tag);
    return acc;
  }, '');

  document.querySelector('#statusDropdown .dropdown__list').innerHTML = statusList;
};

export { setStatus, statusInfo };