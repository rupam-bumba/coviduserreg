const user_db = require("../model/users");

exports.get_report = (req, res, next) => {

// SELECT * FROM `users` WHERE date BETWEEN "2021-10-19 00:00:00" AND "2021-10-20 23:58:00" AND state = 'beher'
// SELECT * FROM `users` WHERE date BETWEEN "2021-10-19 00:00:00" AND "2021-10-20 23:58:00" AND state = 'beher' GROUP BY MONTH(date)

// SELECT  YEAR(date), MONTH(date), WEEK(date) , COUNT(id)
// FROM `users`
// GROUP BY DAY(date)

// SELECT  YEAR(date), MONTH(date), WEEK(date) , COUNT(id)
// FROM `users`
// GROUP BY YEAR(date) 

// Daily  Weekly  Monthly Yearly


console.log(req.body)



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
  