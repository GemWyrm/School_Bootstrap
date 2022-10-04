alert('index.js');
import getDateString from './date.js';
document
    .querySelector('.js-content')
    .innerHTML = `It's ${ getDateString() }`;