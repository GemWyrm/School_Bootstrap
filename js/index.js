alert('index.js');
import getDateString from './date.js';
import '../styles/styles.scss';
import image from '../images/image.jpeg';
// Display the image
const imageElement = document.createElement('img');
imageElement.src = image; 
imageElement.alt = 'Always provide a descriptive alt text.';
document.body.append(imageElement);
// Print the current time
document.querySelector('.js-content').innerHTML = `It's ${ getDateString() }`;