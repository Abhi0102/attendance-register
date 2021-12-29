const Attendance = require("../models/attendance");
const User = require("../models/user");

module.exports.punchIn = async function (req, res) {
  try {
    const att = await Attendance.findOne({
      user: req.body._id,
      outDate: null,
    });
    if (!att) {
      Attendance.create({
        inDate: req.body.date,
        user: req.body._id,
        outDate: null,
      });
      return res.status(200).json({
        data: {
          success: true,
          message: "Successfully Punched in",
        },
      });
    } else {
      return res.status(422).json({
        data: {
          success: false,
          error: "Already an open punch in entry",
        },
      });
    }
  } catch (err) {
    console.log("Some error occured");
    return res.status(422).json({
      data: {
        success: false,
        error: err,
      },
    });
  }
};

module.exports.punchOut = async function (req, res) {
  try {
    const att = await Attendance.findOneAndUpdate(
      {
        user: req.body._id,
        outDate: null,
      },
      {
        outDate: req.body.date,
      },
      { new: true }
    );

    if (att) {
      return res.status(200).json({
        data: {
          success: true,
          message: "Successfully Punched in",
        },
      });
    } else {
      return res.status(422).json({
        data: {
          success: false,
          error: "No Punch in entry found",
        },
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(422).json({
      data: {
        success: false,
        error: err,
      },
    });
  }
};

module.exports.fetchPunchDetails = async function (req, res) {
  try {
    const user = await User.findById(req.query.user_id);

    if (user.admin === true) {
      const resData = await Attendance.find({}).populate({
        path: "user",
        select: "name",
      });
      return res.status(200).json({
        data: {
          success: true,
          resp: resData,
        },
      });
      //   console.log(resData);
    } else {
      const resData = await Attendance.find({
        user: req.query.user_id,
      }).populate({
        path: "user",
        select: "name",
      });
      return res.status(200).json({
        data: {
          success: true,
          resp: resData,
        },
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(422).json({
      data: {
        success: false,
        error: err,
      },
    });
  }
};
