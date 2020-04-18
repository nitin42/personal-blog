exports.handler = function(event, context, callback) {
  callback(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    statusCode: 200,
    body: "Hello World",
  })
}
