import { api } from '../api';

const dealName = document.getElementById('dealName');
const dealCost = document.getElementById('dealCost');


export const onclickSubmitForm = async () => {
  const title = dealName.value;
  const amount = +dealCost.value;
  const pipeline = 'new';
  const clientHash = dealClient.dataset.hash;
  const status = dealPriority.value;
  const deadline = deasDeadline.dataset.date;
  const comment = dealComment.value;
  
  await api.createLead.fetch({ title, amount, pipeline, clientHash, status, deadline, comment });
};