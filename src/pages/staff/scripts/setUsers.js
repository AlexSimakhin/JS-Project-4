import { api } from '../../../common/api';
import { userItemTemplate, paginationTemplate } from './templates.js';

const setUsers = async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const currentPage = urlParams.get('page') || 1;
  const { data: { docs: users, meta}} = await api.getUsers.fetch({ query:{ limit: 3, page: currentPage }});

  const usersList = users.reduce((acc, user) => {
    acc += userItemTemplate(user);
    return acc;
  }, '');
  const pageList = paginationTemplate(meta);

  document.querySelector('#contactTableForm .contact__table__header').insertAdjacentHTML('afterend', usersList);
  document.querySelector('#pagination ul').innerHTML = pageList;
};

export { setUsers };