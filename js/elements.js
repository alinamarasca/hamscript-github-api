import { showData } from './handlers.js';

export const search = document.createElement('div');
const header = document.createElement('h1');
header.innerText = 'find user:'

export const inputField = document.createElement('input');
inputField.setAttribute('type', 'text');

const button =  document.createElement('button');
button.innerText = 'search';
button.addEventListener('click', showData);

search.append(header, inputField, button);


export const result = document.createElement('div');

export const usersName = document.createElement('div');
export const accCreated = document.createElement('div');
export const pubRepos = document.createElement('div');
export const url = document.createElement('div');
export const location = document.createElement('div');
