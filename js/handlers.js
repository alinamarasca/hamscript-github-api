import { usersName, accCreated, inputField, pubRepos, url, location, result } from './elements.js'
import { client_id, client_secret } from './app.js';


export const fetchUsers = async(user) => {
const api_call = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`);
const data = await api_call.json();
return { data };
};


export const showData = () => {

    result.append(usersName, accCreated, pubRepos, url, location);

    fetchUsers(inputField.value).then((response) => {
    
    usersName.innerHTML = `name: ${response.data.name}`;

    let date = new Date(response.data.created_at);
    accCreated.innerHTML = `account created at: ${date.toLocaleDateString()}`;

    pubRepos.innerHTML = `public repos: ${response.data.public_repos}`;

    url.innerHTML = `github url: ${response.data.html_url}`;

    location.innerHTML = `current location: ${response.data.location}`;
    })

    inputField.value = '';
}