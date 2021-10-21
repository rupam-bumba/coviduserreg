const express = require("express");
const router = express.Router();


const user_entry = require("../controller/user_entry");
router.post("/user-entry", user_entry.post_user_entry);


const user_info = require("../controller/user_info");
router.get("/user-info", user_info.get_user_info);


const report = require("../controller/report");
router.post("/report", report.get_report);




module.exports = router;
