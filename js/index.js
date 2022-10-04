import getDateString from './date.js';
import '../styles/styles.scss';
import image from '../images/image.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '@fortawesome/fontawesome-free/js/all';
import '../index.html';
// Display the image
const imageElement = document.createElement('img');
imageElement.src = image; 
imageElement.alt = 'Always provide a descriptive alt text.';
document.body.append(imageElement);
// Print the current time
document.querySelector('.js-content').innerHTML = `<i class="fas fa-clock"></i> ${ getDateString() }`;
