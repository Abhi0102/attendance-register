const express = require("express");
const router = express.Router();

router.use("/api/user", require("./user"));
router.use("/api/attendance", require("./attendance"));

module.exports = router;
