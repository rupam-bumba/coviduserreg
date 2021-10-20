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







module.exports = Users;