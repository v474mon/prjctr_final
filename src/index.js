import moment from 'moment';
import fixture, {menu, sayHi} from './static/fixtures';

import {asset} from './globals/commons'

import './styles.css';
import './main.sass';

fixture();
sayHi();
console.log(menu);


const rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log('Time: ', rightNow);

console.log(asset('cl1.png'));
