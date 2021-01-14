const dropdownTags = document.getElementById('dropdownTags');
const dropdownTagsList = dropdownTags.querySelector('.dropdown__list');
const priorityCircle = dropdownTags.querySelector('.priority__circle');

const circlePriorityColor = {
  'Низкий': 'green',
  'Высокий': 'yellow',
  'Срочный': 'red',
};

const listItemHTML = ({ name, hash }) => `
  <li>
    <div class="priority__circle ${circlePriorityColor[name] || ''}" data-name="${name}" data-hash="${hash}"></div>
    ${name}
  </li>
`;

export const createDroplistTags = (data) => {
  let list = '';
  let ifFirstPriorityGet = false;

  for (const item of data) {
    if (item.kind === 'priority') {
      list += listItemHTML(item);

      if (!ifFirstPriorityGet) {
        dealPriority.value = item.name;
        priorityCircle.classList.add(`${circlePriorityColor[item.name] || ''}`);
        ifFirstPriorityGet = true;
      }
    }
  }

  dropdownTagsList.insertAdjacentHTML('afterbegin', list);
};