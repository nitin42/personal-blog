const fetch = require("node-fetch")

const CLIENT_ID = "42064"
const CLIENT_SECRET = "db18a7a7ba701f727ae7a7443bc05e7cb6265715"
const REFRESH_TOKEN = "9942ed8051fa2f27f73a350c41faa7f34d949755"

const STRAVA_ENDPOINT = `https://www.strava.com/oauth/token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&refresh_token=${REFRESH_TOKEN}&grant_type=refresh_token`

exports.handler = async (event, context, callback) => {
  return fetch(STRAVA_ENDPOINT, {
    method: "POST",
    headers: { Accept: "application/json" },
  })
    .then(response => response.json())
    .then(
      (data = {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        body: data,
      })
    )
}
