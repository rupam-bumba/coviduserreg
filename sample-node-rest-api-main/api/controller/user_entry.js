const user_db = require("../model/users");


exports.post_user_entry = (req, res, next) => {

  console.log( req )


  let valus = {
    adhar : "1223435454566",
    ipid  : "21223.2121.21212.212",
    iptype : '1',
    state : "beher",
  }
  user_db.create( valus, (err,data)=>{

    if (err){
      res.status(500).json({
        err
      });
    }
    res.status(200).json({
      "data" : data ,
      "ip": req.ip
    });

  } )





};
