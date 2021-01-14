import '../../../css/style.scss';
import { setStatistic, setChart, setDeals } from './helper';

(async () => {
  await setStatistic();
  await setChart();
  await setDeals();
})();
