const rp = require("request-promise");
const debug = require('debug')('linkedin-api-wrapper:core');


module.exports = function(options) {
  options.version = options.version || 'v1';

  return {
    access_token: options.access_token,
    version: options.version,

    api: api,
  };
}

function api(endpoint, options) {
  options = {
    uri: `https://api.linkedin.com/${this.version}/${endpoint}?format=json`,
    method: options && options.method || 'GET',
    body: options && options.body,
    json: true,
    headers: {
      'Authorization': `Bearer ${this.access_token}`,
    },
  };

  return rp(options);
}
