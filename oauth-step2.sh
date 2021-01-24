# See README.md for usage

curl \
  -D- \
  --data "grant_type=authorization_code" \
  --data "code=${LINKEDIN_CODE}" \
  --data "redirect_uri=http://localhost:8000" \
  --data "client_id=${LINKEDIN_CLIENT_ID}" \
  --data "client_secret=${LINKEDIN_CLIENT_SECRET}" \
  "https://www.linkedin.com/oauth/v2/accessToken"
