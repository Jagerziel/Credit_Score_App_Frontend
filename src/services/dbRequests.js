// import { API_URLS } from '../services/apiConfig.js';

const URL = 'http://localhost:4000/test/';

export const getInfo = async (user) => {
  const token = await user.getIdToken();
  // console.log(token);
  // this will log the json web token to the console in base64 format

  const response = await fetch(URL, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
  const data = await response.json();
  return data;
};

export const createInfo = async (user, input) => {
  if (!user) return; // prevent function from executing code below without user

  const token = await user.getIdToken();

  await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
    body: JSON.stringify(input),
  });
};

export const updateInfo = async (id, updatedInfo) => {
  const response = await fetch(URL + id, {
    method: 'PUT',
    headers: {
      'Content-type': 'Application/json',
    },
    body: JSON.stringify(updatedInfo),
  });
  if (response.ok) {
    return await response.json();
  }
};
