import { formatDate } from  '../../../common/index';

const dealsHeaderTemplate = (deals) => `
    <div class="column__header flex">
    <h2>Мои сделки <span class="count">${deals.length}</span></h2>
</div>
`;

const dealCardTemplate = (deal) => {
  const { title, deadline, manager, amount, status, hash } = deal;
  const circlePriorityColor = {
    'Низкий': 'green',
    'Высокий': 'yellow',
    'Срочный': 'red',
  };

  return(`
    <div class="task task__block ${circlePriorityColor[status] || ''}">
      <h2 class="task__title">${title}</h2>
      <p class="task__deadline">Закрыть до: <span>${formatDate(deadline)}</span></p>
      <div class="task__executor flex">
        <img src="img/icon/ava-empty.svg" class="executor__img" alt="">
        <p class="executor__name">${manager}</p>
      </div>
      <img src="img/icon/icons-delete.svg" class="remove__icon" alt="delete" data-hash="${hash}">
      <p class="price">$${amount}</p>
    </div>
  `);
};

export { dealsHeaderTemplate, dealCardTemplate };