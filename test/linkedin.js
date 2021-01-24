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
    return linkedin.api('me')
      .then((body) => assert.equal(typeof body, 'object'));
  });

  it("should return an object holding the answer", () => {
    return linkedin.api('me')
      .then((body) => {
        debug(body);
        assert.property(body, 'id');
        assert.property(body, 'localizedFirstName');
        assert.property(body, 'localizedLastName');
      });
  });

  it("should allow posting", async () => {
    author = await linkedin.api('me').then(body => body.id)

    return linkedin.api('ugcPosts', {
        method: 'POST',
        body: {
          "author": `urn:li:person:${author}`,
          "lifecycleState": "PUBLISHED",
          "specificContent": {
            "com.linkedin.ugc.ShareContent": {
              "shareCommentary": {
                "text": "Check out my web site --  https://yesik.it",
              },
              "shareMediaCategory": "NONE",
            }
          },
          "visibility": {
            "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC"
          }
        },
      })
      .then((body) => {
        debug(body);
        assert.property(body, 'id');
        assert.match(body.id, /^urn:li:share:/);
      });
  });


});
