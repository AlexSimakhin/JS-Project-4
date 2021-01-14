import '../../../css/style.scss';
import { setUsers } from './setUsers';
import { setStatus } from './setStatus';
import { setSelectedStatus, changeStatusSubmit, setSelectedCount, deleteClientSubmit } from './helper';

const allPopups = document.querySelectorAll('.popup');
const changeStatusButton = document.querySelector('#changeStatusButton');
const deleteButton = document.querySelector('#deleteButton');
const popupEdit = document.querySelector('#popupEdit');
const popupRemove = document.querySelector('#popupRemove');
const popupCloseButtons = document.querySelectorAll('.popup .close__icon');
const dropdown = document.querySelector('#statusDropdown');
const dropdownList = document.querySelector('#statusDropdown .dropdown__list');
const editSubmit = popupEdit.querySelector('.btn__section .submit');
const editCancel = popupEdit.querySelector('.btn__section .cancel');
const deleteSubmit = popupRemove.querySelector('.btn__section .submit');
const deleteCancel = popupRemove.querySelector('.btn__section .cancel');


const hideAllPopup = () => allPopups.forEach(item => item.classList.remove('show'));
//Listeners
changeStatusButton.onclick = (e) => {
  e.preventDefault();
  hideAllPopup();
  popupEdit.classList.add('show');
};
deleteButton.onclick = (e) => {
  e.preventDefault();
  hideAllPopup();
  popupRemove.classList.add('show');
};
popupCloseButtons.forEach(item => item.addEventListener('click', hideAllPopup));
dropdown.onclick = () => {
  dropdown.classList.toggle('open');
};
dropdownList.addEventListener('click', setSelectedStatus);
editSubmit.addEventListener('click', (e) => changeStatusSubmit(e));
editCancel.addEventListener('click', hideAllPopup);
deleteSubmit.addEventListener('click', (e) => deleteClientSubmit(e));
deleteCancel.addEventListener('click', hideAllPopup);


(async () => {
  await setUsers();
  await setStatus();

  const checkContact = document.querySelectorAll('.contactCheck');
  checkContact.forEach(item => item.addEventListener('click', setSelectedCount));
})();

