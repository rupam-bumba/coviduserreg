const sql = require("../../db.js");


const Users = function (customer) {

  this.adhar = customer.adhar;
  this.ipid = customer.ipid;
  this.iptype = customer.iptype;
  this.state = customer.State;
  this.date = customer.State;

};

//  INSERT INTO `users` (`id`, `adhar`, `ipid`, `iptype`, `state`, `date`) VALUES (NULL, '1234567890876', '123.345.2.34', '1', 'asam', CURRENT_TIMESTAMP);

Users.create = (newCustomer, result) => {

  let que = "INSERT INTO `users` (`id`, `adhar`, `ipid`, `iptype`, `state`, `date`)" + `VALUES (NULL, '${newCustomer.adhar}', '${newCustomer.ipid}', '${newCustomer.iptype}', '${newCustomer.state}', CURRENT_TIMESTAMP)`

  sql.query(que, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created customer: ", { id: res.insertId, ...newCustomer });
    result(null, { id: res.insertId, ...newCustomer });
  });
};


Users.getAll = (result) => {
  sql.query("SELECT * FROM users", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("users: ", res);
    result(null, res);
  });
};



Users.report = (parameters,result) => {

  
  let groupby 
  let where = `WHERE date BETWEEN '${parameters.startdate} 00:00:00' AND '${parameters.enddate} 23:59:00' AND state = '${parameters.state}'`
  let select 


  switch (parameters.grouped) {
    case "yearly":
      groupby = "GROUP BY YEAR(date)"
      select  = "SELECT  YEAR(date), COUNT(id)"
      break;
    case "monthly":
      groupby = "GROUP BY YEAR(date), MONTH(date)"
      select  = "SELECT  YEAR(date), MONTH(date), COUNT(id)"
      break;
    case "weekly":
      groupby = "GROUP BY YEAR(date), WEEK(date)"
      select  = "SELECT  YEAR(date),  WEEK(date) COUNT(id)"
      break;
    case "daily":
      groupby = "GROUP BY YEAR(date), MONTH(date), DAY(date)"
      select  = "SELECT YEAR(date), MONTH(date), DAY(date), COUNT(id)"
      break;
    default:
      groupby = "GROUP BY YEAR(date)"
      select  = "SELECT  YEAR(date), COUNT(id)"
      break;
  } 
 

  let querys = select + "FROM `users`"+ where +  groupby;
  
  sql.query(querys, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("users: ", res);
    result(null, res);
  });

};




module.exports = Users;