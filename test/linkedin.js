const { assert } = require('chai');
const LinkedIn = require('../index.js');
const debug = require('debug')('linkedin-api-wrapper:test');

const ACCESS_TOKEN=process.env.LINKEDIN_ACCESS_TOKEN;

describe("linkedin", function() {

  const linkedin = LinkedIn({
    access_token: ACCESS_TOKEN,
  });
  this.timeout(5000);

  it("should return an object on success", () => {
    return linkedin.api('people/~')
      .then((body) => assert.equal(typeof body, 'object'));
  });

  it("should return an object holding the answer", () => {
    return linkedin.api('people/~')
      .then((body) => {
        debug(body);
        assert.property(body, 'firstName');
        assert.property(body, 'lastName');
        assert.property(body, 'siteStandardProfileRequest');
        assert.property(body.siteStandardProfileRequest, 'url');
      });
  });

  it("should allow posting", () => {
    return linkedin.api('people/~/shares', {
        method: 'POST',
        body: {
          "comment": "Check out my web site! https://yesik.it",
          "visibility": {
            "code": "anyone"
          }
        },
      })
      .then((body) => {
        debug(body);
        assert.property(body, 'updateKey');
        assert.property(body, 'updateUrl');
      });
  });


});
