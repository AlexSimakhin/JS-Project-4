import '../../../css/style.scss';
import { api } from './api';
import { dragAndDrop } from './events/dragAndDrop';

const taskboard = document.getElementById('taskboard');

(async () => {
  await api.getLeads.fetch();
})();

taskboard.onclick = async (e) => {
  let target = e.target.closest('.remove__icon');
  if (!target) return;

  await api.deleteLead.fetch(target.dataset.hash);
  await api.getLeads.fetch();
};

dragAndDrop();