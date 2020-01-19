import Home from './Home/';
import Harvest from './Harvest';
import ManualHarvest from './ManualHarvest';
import Orders from './Orders';
import PlantingLog from './PlantingLog';
import Reports from './Reports';
import Suppliers from './Suppliers/';
import FoodSafetyForms from './FoodSafetyForms';
import {
  faHome,
  faDungeon,
  faDragon,
  faClipboardList,
  faCommentDollar,
  faCheckSquare,
  faHamburger
} from '@fortawesome/free-solid-svg-icons';

export default function routes() {
  return ([
    {
      pathname: '/',
      name: 'Home',
      id: 'home',
      component: Home,
      icon: faHome,
    },
    {
      pathname: '/populated-harvest',
      name: 'Ready to Harvest',
      id: 'harvest',
      component: Harvest,
      icon: faDungeon,
    },
    {
      pathname: '/harvesting-log',
      name: 'Manual Harvest',
      id: 'manual-harvest',
      component: ManualHarvest,
      icon: faDragon,
    },
    {
      pathname: '/populated-planting',
      name: 'Standing Orders',
      id: 'orders',
      component: Orders,
      icon: faCommentDollar,
    },
    {
      pathname: '/planting-log',
      name: 'Planting Log',
      id: 'planting',
      component: PlantingLog,
      icon: faClipboardList,
    },
    {
      pathname: '/food-safety-plan-logs-forms',
      name: 'Food Safety Forms',
      id: 'food-safety',
      component: FoodSafetyForms,
      icon: faCheckSquare,
    },
    {
      pathname: '/reports',
      name: 'Reports',
      id: 'reports',
      component: Reports,
      icon: faHamburger,
    },
    {
      pathname: '/suppliers',
      name: 'Suppliers',
      id: 'suppliers',
      component: Suppliers,
    },
  ]);
}
