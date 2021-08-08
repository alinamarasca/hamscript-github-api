import {
  usersName,
  accCreated,
  inputField,
  pubRepos,
  url,
  location,
  result,
} from "./elements.js";
import { client_id, client_secret } from "./app.js";

export const fetchUsers = async (user) => {
  const URL = `https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`;

  const encodedURL = encodeURI(URL);
  const response = await fetch(encodedURL);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}\n-> ${URL}`);
  }
  const data = await response.json();

  return { data };
};

export const showData = async () => {
  try {
    result.innerHTML = "";
    result.append(usersName, accCreated, pubRepos, url, location);

    const response = await fetchUsers(inputField.value);

    usersName.innerHTML = `<span class='field'>name:</span> ${response.data.name}`;

    let date = new Date(response.data.created_at);
    accCreated.innerHTML = `<span class='field'>account created at:</span>  ${date.toLocaleDateString()}`;

    pubRepos.innerHTML = `<span class='field'>public repos:</span>  ${response.data.public_repos}`;

    url.innerHTML = `<span class='field'>github url:</span> <a href = ${response.data.html_url}> ${response.data.html_url}</a>`;

    location.innerHTML = `<span class='field'>current location:</span> ${response.data.location}`;
  } catch (error) {
    console.log(error);
    result.innerHTML = `User '${inputField.value}' doesn't exist`;
  }
  inputField.value = "";
};
