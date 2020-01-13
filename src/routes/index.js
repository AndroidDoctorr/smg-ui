import Home from './Home/';
import Harvest from './Harvest';
import ManualHarvest from './ManualHarvest';
import Orders from './Orders';
import Planting from './Planting';
import Reports from './Reports';
import FoodSafetyForms from './FoodSafetyForms';

export default function routes() {
  return ([
    {
      pathname: '/',
      name: 'Home',
      id: 'home',
      component: Home,
    },
    {
      pathname: '/populated-harvest',
      name: 'Ready to Harvest',
      id: 'harvest',
      component: Harvest,
    },
    {
      pathname: '/harvesting-log',
      name: 'Manual Harvest',
      id: 'manual-harvest',
      component: ManualHarvest,
    },
    {
      pathname: '/populated-planting',
      name: 'Standing Orders',
      id: 'orders',
      component: Orders,
    },
    {
      pathname: '/planting-log',
      name: 'Manual Planting',
      id: 'planting',
      component: Planting,
    },
    {
      pathname: '/food-safety-plan-logs-forms',
      name: 'Food Safety Forms',
      id: 'food-safety',
      component: FoodSafetyForms,
    },
    {
      pathname: '/reports',
      name: 'Reports',
      id: 'reports',
      component: Reports,
    },
  ]);
}
