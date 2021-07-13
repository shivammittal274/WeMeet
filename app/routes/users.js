const express = require("express");
const router = express.Router();
const userController = require('../controllers/users_controller');

router.post('/findUser', userController.findUser);
router.post('/addUser', userController.addUser);
// router.post('/getUsersList', userController.getUsersList);
// router.post('/getPreviousUsers', chatController.getPreviousUsers);

module.exports = router;