const dropdownList = dropdownClient.querySelector('.dropdown__list');

const dealClient = document.getElementById('dealClient');
const dealTel = document.getElementById('dealTel');
const dealMail = document.getElementById('dealMail');
const dealExecutor = document.getElementById('dealExecutor');
const managerAvatar = managerNames.querySelector('.executor__img');

export const droplistClients = () => {
  dropdownList.onclick = (e) => {
    let target = e.target.closest('li');
    if (!target) return;

    dealClient.value = target.dataset.name;
    dealClient.dataset.hash = target.dataset.hash;
    dealTel.value = target.dataset.phone;
    dealMail.value = target.dataset.email;
    dealExecutor.value = target.dataset.manager;

    if (dealExecutor.value !== '') {
      managerAvatar.classList.remove('closed-img');
      managerAvatar.classList.add('opened-img');
    }
  };
};