const express = require("express");
const router = express.Router();
const passport = require("passport");
const attendanceAPI = require("../controllers/attendanceAPI");

// router.use("/api/user", require("./user"));

router.post(
  "/punchin",
  passport.authenticate("jwt", { session: false }),
  attendanceAPI.punchIn
);

router.post(
  "/punchout",
  passport.authenticate("jwt", { session: false }),
  attendanceAPI.punchOut
);

router.get(
  "/fetch-punch-details",
  // passport.authenticate("jwt", { session: false }),
  attendanceAPI.fetchPunchDetails
);

module.exports = router;
