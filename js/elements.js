import { showData } from './handlers.js';

export const search = document.createElement('div');
search.className = 'search';

export const inputField = document.createElement('input');
inputField.setAttribute('type', 'text');
inputField.className = 'input';
inputField.placeholder = 'find GitHub user'


const button =  document.createElement('button');
button.innerText = 'search';
button.addEventListener('click', showData);

search.append(inputField, button);


export const result = document.createElement('div');
result.className = "result";

export const usersName = document.createElement('div');
export const accCreated = document.createElement('div');
export const pubRepos = document.createElement('div');
export const url = document.createElement('div');
export const location = document.createElement('div');
