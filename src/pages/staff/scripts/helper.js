import { statusInfo } from './setStatus';
import { api } from '../../../common/api';

const setSelectedStatus = (e) => {
  const statusName = e.target.dataset.statusName;
  const statusTitle = e.target.dataset.statusTitle;
  document.querySelector('#dealPriority').value = statusTitle;
  document.querySelector('#dealPriority').dataset.statusName = statusName;
  document.querySelector('#dealPriorityCircle').classList = `priority__circle ${statusInfo[statusName].color}`;
};

const getCheckedIds = () => {
  const checkContact = document.querySelectorAll('.contactCheck');
  return Array.from(checkContact).reduce((acc, checkbox) => {
    if(checkbox.checked){
      acc.push(checkbox.id);
    }
    return acc;
  }, []);
};

const setSelectedCount = () => {
  const checkedIds = getCheckedIds();
  document.querySelector('.action__legend span').innerHTML = checkedIds.length;
  document.querySelector('.warning__text span').innerHTML = checkedIds.length;
};

const changeStatusSubmit = async (e) => {
  e.preventDefault();
  const checkedIds = getCheckedIds();
  const statusName = document.querySelector('#dealPriority').dataset.statusName;
  const promises = checkedIds.map(async(id) => (await api.putUser.fetch({ hash: id, body: { status: statusName }})));
  await Promise.all(promises);
};

const deleteClientSubmit = async (e) => {
  e.preventDefault();
  const checkedIds = getCheckedIds();
  const promises = checkedIds.map(async(id) => (await api.deleteUser.fetch({ hash: id })));
  await Promise.all(promises);
};

export { setSelectedStatus, setSelectedCount, changeStatusSubmit, deleteClientSubmit };