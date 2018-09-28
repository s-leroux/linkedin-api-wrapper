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
  version: 'v1', // this is the default
});
```


### Obtaining informations about your profile

```
const profile = await linkedin.get('people/~');
```

### Sharing content on your feed

```
const response = await linkedin.get('people/~/shares', {
    method: 'POST',
    body: {
      "comment": "Check out my web site! https://yesik.it",
      "visibility": {
        "code": "anyone"
      }
    },
  });
```

### Other methods

The library is a very thing wrapper. It should work with any API endpoint.

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
