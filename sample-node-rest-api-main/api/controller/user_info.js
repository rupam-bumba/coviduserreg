const user_db = require("../model/users");


exports.get_user_info = (req, res, next) => {


  user_db.getAll((err, data) => {
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
