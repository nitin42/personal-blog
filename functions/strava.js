const fetch = require("node-fetch")

exports.handler = async function(event, context, callback) {
  const CLIENT_ID = "42064"
  const CLIENT_SECRET = "db18a7a7ba701f727ae7a7443bc05e7cb6265715"
  const REFRESH_TOKEN = "9942ed8051fa2f27f73a350c41faa7f34d949755"
  const GRANT_TYPE = "refresh_token"

  const STRAVA_ENDPOINT = `https://www.strava.com/oauth/token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&refresh_token=${REFRESH_TOKEN}&grant_type=refresh_token`

  const stravaResponse = await fetch(STRAVA_ENDPOINT, { method: "POST" })

  callback(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    statusCode: 200,
    body: stravaResponse.json(),
  })
}
