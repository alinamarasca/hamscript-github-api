
import { search }  from './elements.js';
import { result } from './elements.js';

export const client_id = 'da08926b25ccd36f2ea4';
export const client_secret = '40df57ea922bd48283308b1930d92392b65941ef';

const body = document.querySelector('body');
const container = document.createElement('div');
container.className = 'container';

body.appendChild(container);
container.append(search, result);


