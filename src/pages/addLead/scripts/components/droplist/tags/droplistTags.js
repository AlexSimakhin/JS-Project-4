const dropdownTagsList = dropdownTags.querySelector('.dropdown__list'); 
const priorityCircleTag = dropdownTags.querySelector('.priority__circle');

export const droplistTags = () => {
  dropdownTagsList.onclick = (e) => {
    let target = e.target.closest('li');
    if (!target) return;
    
    dealPriority.value = target.querySelector('.priority__circle').dataset.name;
    priorityCircleTag.classList.value = target.querySelector('.priority__circle').classList.value;
  };
};