exports.handler = function(event, context, callback) {
  // your server-side functionality
  callback(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    statusCode: 200,
    body: "Hello, World",
  })
}
