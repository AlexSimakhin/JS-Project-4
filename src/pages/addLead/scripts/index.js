import '../../../css/style.scss';

import { api } from './api';
import * as droplist from './components/droplist';
import { dataPicker } from './js-datepicker/dataPicker';
import * as events from './events';

const dropdownClient = document.getElementById('dropdownClient');
const dealClient = document.getElementById('dealClient');
const deasDeadline = document.getElementById('deasDeadline');
const formCreateLead = document.getElementById('formCreateLead');
const dealExecutor = document.getElementById('dealExecutor');

(async () => {
  await api.getClients.fetch();
  await api.getTags.fetch();
})();

events.onclickDropdown();
dataPicker();
droplist.droplistClients();
droplist.droplistTags();
droplist.droplistManagers();

