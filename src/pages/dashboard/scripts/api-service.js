import {api} from '../../../common/api';

const getCounts = async() => {
  const [leads, users, clients] = await Promise.all([
    await api.getLeads.fetch(),
    await api.getUsers.fetch({ query:{ page: 1 }}),
    await api.getClients.fetch(),
  ]);
  return {
    leads: leads?.data.meta.totalDocs,
    users: users?.data.meta.totalDocs,
    clients: clients?.data.meta.totalDocs,
  };
};

const getDeals = async() => {
  const { data } = await api.getLeads.fetch({user: true});
  return {
    deals: data.docs,
  };
};

export { getCounts, getDeals };