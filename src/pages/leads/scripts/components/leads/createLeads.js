const tasksColumnNew = document.querySelector('.tasks__column.new');
const tasksColumnInProgress = document.querySelector('.tasks__column.in-progress');
const tasksColumnDone = document.querySelector('.tasks__column.done');

const countNew = tasksColumnNew.querySelector('.count');
const countInProgress = tasksColumnInProgress.querySelector('.count');
const countDone = tasksColumnDone.querySelector('.count');

const circlePriorityColor = {
  'Низкий': 'green',
  'Высокий': 'yellow',
  'Срочный': 'red',
};

const leadItemHTML = ({ status, title, manager, deadline, hash, amount }, date) => `
  <div class="task task__block ${circlePriorityColor[status] || ''}" data-title="${title}" data-hash="${hash}" data-amount="${amount}" data-status="${status}" data-deadline="${deadline}" draggable="true">
    <h2 class="task__title">${title}</h2>
    <p class="task__deadline">Закрыть до: <span>${date}</span></p>
    <div class="task__executor flex">
      <img src="img/icon/ava-empty.svg" class="executor__img" alt="">
      <p class="executor__name">${manager}</p>
    </div>
    <img src="img/icon/icons-delete.svg" class="remove__icon" alt="delete" data-hash="${hash}">

    <p class="price">$${amount}</p>
  </div>
`;


export const createLeads = (data) => {
  // new, inProgress, done
  const allLeadsItems = document.querySelectorAll('.task.task__block');
  allLeadsItems.forEach(item => item.remove());

  let listNew = '';
  let listInProgress = '';
  let listDone = '';

  let counterNew = 0;
  let counterInProgress = 0;
  let counterDone = 0;

  for (const item of data.docs) {
    let date = new Date(item.deadline).toLocaleDateString('ru', { year: 'numeric', month: 'long', day: 'numeric' });

    if (item.pipeline === 'new') {
      listNew += leadItemHTML(item, date);
      counterNew++;
    }
    if (item.pipeline === 'inProgress') {
      listInProgress += leadItemHTML(item, date);
      counterInProgress++;
    }
    if (item.pipeline === 'done') {
      listDone += leadItemHTML(item, date);
      counterDone++;
    }
  }

  tasksColumnNew.insertAdjacentHTML('beforeend', listNew);
  tasksColumnInProgress.insertAdjacentHTML('beforeend', listInProgress);
  tasksColumnDone.insertAdjacentHTML('beforeend', listDone);

  countNew.innerHTML = counterNew;
  countInProgress.innerHTML = counterInProgress;
  countDone.innerHTML = counterDone;
};