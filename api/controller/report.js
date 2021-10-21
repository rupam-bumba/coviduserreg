const user_db = require("../model/users");

exports.get_report = (req, res, next) => {

  //  get report 
user_db.report(req.body, (err, data) => {
      if (err) {
        res.status(500).json({
          err
        });
      } else {
        res.status(200).json({
          data,
        });
      }
    })
  
  
  };
  