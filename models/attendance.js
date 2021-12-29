const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema(
  {
    inDate: {
      type: Date,
      required: true,
    },
    outDate: {
      type: Date,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Attendance = mongoose.model("Attendance", attendanceSchema);

module.exports = Attendance;
