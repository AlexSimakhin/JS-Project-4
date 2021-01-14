const dropdownManagersList = managerNames.querySelector('.dropdown__list'); 
const managerAvatar = managerNames.querySelector('.executor__img');

export const droplistManagers = () => {
  dropdownManagersList.onclick = (e) => {
    let target = e.target.closest('li');
    if (!target) return;
    
    dealExecutor.value = target.dataset.name;
    dealExecutor.dataset.hash = target.dataset.hash;

    if (dealExecutor.value !== '') {
      managerAvatar.classList.remove('closed-img');
      managerAvatar.classList.add('opened-img');
    }
  };
};