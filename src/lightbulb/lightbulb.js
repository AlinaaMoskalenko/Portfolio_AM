import './lightbulb.scss';
import { lightBulb } from './scripts/lightBulb';

const lightBulbElements = document.querySelectorAll('.lightbulb-block');

for (let i = 0; i < lightBulbElements.length; i++) {
    lightBulb(lightBulbElements[i]);
}