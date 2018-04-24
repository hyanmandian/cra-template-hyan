import 'whatwg-fetch';

function parseJSON(response) {
  return (response.status === 204 || response.status === 205) ? null : response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) return response;

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

export default function request(url, options) {
  return fetch(url, options).then(checkStatus).then(parseJSON);
}
