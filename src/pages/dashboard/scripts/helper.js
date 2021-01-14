import Highcharts from 'highcharts';
import { getCounts, getDeals } from './api-service';
import { dealsHeaderTemplate, dealCardTemplate } from './templates';

const setStatistic = async () => {
  const { leads, users, clients } = await getCounts();

  document.querySelector('#leadsStatistic').innerHTML = leads;
  document.querySelector('#usersStatistic').innerHTML = users;
  document.querySelector('#clientsStatistic').innerHTML = clients;
};

const setChart = async () => {
  const { users, clients } = await getCounts();
  const allCounts = clients+users;
  const clientsPercent = Math.floor(clients / allCounts * 100);
  const usersPercent = Math.floor(users / allCounts * 100);

  document.querySelector('#clientsPercent').innerHTML = `${clientsPercent}%`;
  document.querySelector('#usersPercent').innerHTML = `${usersPercent}%`;
  Highcharts.chart('dashboardChart', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
    },
    title: {
      text: null,
    },
    plotOptions: {
      pie: {
        size: 130,
        allowPointSelect: false,
        dataLabels: {
          enabled: false,
        },
      },
    },
    series: [{
      type: 'pie',
      name: 'Количество',
      data: [
        {
          name: 'Клиентов',
          y: users,
          color: '#109cf1',
        },
        {
          name: 'Сотрудников',
          y: clients,
          color: '#ffb946',
        },
      ],
    }],
    credits: {
      enabled: false,
    },
  });
};

const setDeals = async () => {
  const dealsColumn = document.querySelector('#dealsColumn');
  const { deals } = await getDeals();
  console.log(deals);
  const dealsHeader = dealsHeaderTemplate(deals);
  const dealsList = deals.reduce((acc, deal) => {
    acc += dealCardTemplate(deal);
    return acc;
  }, '');

  dealsColumn.innerHTML = null;
  dealsColumn.innerHTML = dealsHeader + dealsList;
};

export { setStatistic, setChart, setDeals };