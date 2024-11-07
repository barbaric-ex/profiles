const express = require("express");

const homeCtrl = require("../controlers/HomeCtrl");
const profileCtrl = require("../controlers/ProfileCtrl");

const router = express.Router();

router.get("/", homeCtrl);

router.get("/profile/:acc_id", profileCtrl.index);
router.delete("/profile/:acc_id", profileCtrl.deleteProfile);

module.exports = router;
