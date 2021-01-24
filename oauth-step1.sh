# See README.md for usage

export LINKEDIN_SCOPE="${LINKEDIN_SCOPE:-r_liteprofile%20w_member_social}"
x-www-browser \
  "https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${LINKEDIN_CLIENT_ID}&client_secret=${LINKEDIN_CLIENT_SECRET}&scope=${LINKEDIN_SCOPE}&state=123456&redirect_uri=http://localhost:8000"
