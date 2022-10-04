alert('index.js');
import getDateString from './date.js';
import '../styles/styles.scss';
document.querySelector('.js-content').innerHTML = `It's ${ getDateString() }`;