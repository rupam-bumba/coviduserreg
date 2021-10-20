const user_db = require("../model/users");
var request = require('request');

exports.post_user_entry = (req, res, next) => {

  let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress;
  let iptype = (ip.indexOf(".") === -1) ? 0 : 1
  let url = (ip !== "::1") ? 'http://ipinfo.io/' + req.ip : 'http://ipinfo.io/';

  request.get(url, function (err, response, body) {
    body = JSON.parse(body) 
    let valus = {
      adhar: req.body.adhar,
      ipid: ip,
      iptype: iptype,
      state: body.region,
    }

    if (!err && response.statusCode == 200) {

      user_db.create(valus, (err, data) => {
        if (err) {
          res.status(500).json({
            err
          });
        }
        res.status(200).json({
          data
        });
      })
    }
  })
};
