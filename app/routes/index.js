const express = require("express");
const router = express.Router();
// const controller = require('./controller');

router.use("/api/call", require('./calls'));
router.use("/api/user", require('./users'));


module.exports = router;