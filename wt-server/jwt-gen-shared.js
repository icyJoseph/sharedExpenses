var express = require("express");
var Webtask = require("webtask-tools");
var bodyParser = require("body-parser");
var request = require("request");
var async = require("async");
var app = express();

app.use(bodyParser.json());

app.post("/", function(req, res, next) {
  const context = req.webtaskContext;
  const reqBody = req.body;
  if (!reqBody || !reqBody["app_name"]) {
    return res.status(400).json({
      error: "app name is missing"
    });
  }
  context.body = reqBody;
  async.waterfall([async.apply(getJWT, context)], function(err, result) {
    if (err)
      return res.status(400).json({
        error: err
      });
    return res.status(200).json({
      access_token: result.token
    });
  });
});

function getJWT(context, cb) {
  const options = {
    url: `https://${context.data.ACCOUNT_NAME}/oauth/token`,
    headers: { "content-type": "application/json" },
    body: `{
          "client_id":  ${context.data.CLIENT_ID},
          "client_secret": ${context.data.CLIENT_SECRET},
          "audience":${context.data.ACCOUNT_NAME}/api/v2/",
          "grant_type":"client_credentials"
    }`
  };

  return request.post(options, function(err, response, body) {
    if (err) return cb(err);
    else {
      return cb(null, context, body);
    }
  });
}

module.exports = Webtask.fromExpress(app);
