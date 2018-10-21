import './lesson_11_1.scss';

import { trafficLighterDynamic } from './scripts/trafficLighterDynamic';
import { trafficLighterDynamicStyles } from './scripts/trafficLighterDynamicStyles';

trafficLighterDynamic('#trafficLighter');
trafficLighterDynamic('#trafficLighter1', ['red', 'yellow', 'green', 'aqua']);
trafficLighterDynamic('#trafficLighter2', ['pink', 'black', 'blue']);

trafficLighterDynamicStyles('#trafficLighter3');
trafficLighterDynamicStyles('#trafficLighter4', ['orange', 'green', 'yellow', 'aqua']);
trafficLighterDynamicStyles('#trafficLighter5', ['black', 'magenta', 'blue']);


