const express = require("express");
const router = express.Router();

// POST _sample
const user_entry = require("../controller/user_entry");
router.post("/user-entry", user_entry.post_user_entry);


// POST _sample
const user_info = require("../controller/user_info");
router.get("/user-info", user_info.get_user_info);




module.exports = router;
