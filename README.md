linkedin-api-wrapper
====================

Simple promise-based wrapper to access the LinkedIn API.
The pacakge does not include OAuth part, assuming you already have an access token. I suggest you obtain the token using Postman or a similar application, but any other solution is viable.


[![Build Status](https://travis-ci.org/s-leroux/linkedin-api-wrapper.png?branch=master)](https://travis-ci.org/s-leroux/linkedin-api-wrapper)
Due to the limited lifetime of LinkedIn access tokens, continuous integration does not work on the long term. Sorry about that.


## Installation

    npm install --save linkedin-api-wrapper


## Usage

### Initializing the library

```
const LinkedIn = require("linkedin-api-wrapper");
const linkedin = LinkedIn({
  access_token: auth_token,
});
```


### Obtaining informations about your profile

```
const profile = await linkedin.api('me');
```

### Sharing content on your feed

```
const response = await linkedin.api('ugcShares', {
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
      "visibility": {
        "code": "anyone"
      }
  });
```

### Other methods

The library is a very thing wrapper. It should work with any API endpoint.

### Obtaining your access token

LinkedIn uses OAuth2 for authentification and requires user approval. Two helpers
scripts are provided to obtain those credentials:

1. First, export the `LINKEDIN_CLIENT_ID` and `LINKEDIN_CLIENT_SECRET` environment variables
   with the corresponding values for your application
2. Then, run `oauth-step1.sh`. It will open an `x-www-browser` window to the authorization page
3. Eventually log in to LinkedIn, then grant parmissions to your application
4. LinkedIn will redirect your browser to `http://localhost:8000`. From the URL bar, copy the 
   `code` parameter
5. Export the code obtained in the previous step as the environment variable `LINKEDIN_CODE`
6. Run the `oauth-step2.sh` script. It will connect to LinkedIn and get an access token for
   your application using the authorization code.
7. Copy the access token from the reply. It will be the token to use for all subsequent
   api requests.

-

## Node version
Require NodeJS >= v7.6
(_should_ work starting with v7.0 with the `--harmony` flag)
Tested with v7.6 and v8.9

## License

(The MIT License)

Copyright (c) 2018 [Sylvain Leroux](mailto:sylvain@chicoree.fr)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
