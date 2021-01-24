const fetch = require('node-fetch');
const debug = require('debug')('linkedin-api-wrapper:core');


module.exports = function(options) {
  options.version = options.version || 'v2';

  return {
    access_token: options.access_token,
    version: options.version,

    api: api,
  };
}

function  checkStatus(res) {
  if (res.ok)
      return res;

  // else
  throw {
    status: res.status,
    error_message: res.statusText,
  };
}

function api(endpoint, options) {
  const url = `https://api.linkedin.com/${this.version}/${endpoint}`;
  options = {
    method: options && options.method || 'GET',
    body: options && options.body &&  JSON.stringify(options.body),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.access_token}`,
    },
  };

  return fetch(url, options)
    .then(checkStatus)
    .then(res => res.json());
}
