const express = require("express");
const router = express.Router();
const callController = require('../controllers/calls_controller');

router.post("/save-call-id", callController.saveCallId); // for saving Call Id in our redis
router.get("/get-call-id/:id", callController.getCallId); // to get Call Id from redis

module.exports = router;