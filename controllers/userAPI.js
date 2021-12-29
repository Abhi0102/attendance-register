const User = require("../models/user");
const jwt = require("jsonwebtoken");

module.exports.register = async function (req, res) {
  // Checking If password matches
  if (req.body.password !== req.body.confirmPassword) {
    return res.status(401).json({
      data: {
        success: false,
        message: `Password and Confirmed Password doesn't match `,
      },
    });
  }

  // If Password Matches
  else if (req.body.password === req.body.confirmPassword) {
    try {
      // Creating user
      const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        admin: req.body.admin,
      });

      return res.status(200).json({
        data: {
          success: true,
          message: "User Successfully Created",
        },
      });
    } catch (err) {
      // If User Already exists i.e. userName is not unique
      if (err.code === 11000) {
        return res.status(401).json({
          data: {
            success: false,
            message: `User Name Already Exists `,
          },
        });
      } else {
        return res.status(401).json({
          data: {
            success: false,
            message: `${err} `,
          },
        });
      }
    }
  }
};

module.exports.userLogin = async function (req, res) {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });

    if (user && user.password === req.body.password) {
      const userJWT = {
        _id: user._id,
        name: user.name,
        email: user.email,
        admin: user.admin,
      };

      return res.status(200).json({
        data: {
          token: jwt.sign(userJWT, process.env.secret, {
            expiresIn: "50000000",
          }),
          success: true,
          user: userJWT,
        },
      });
    } else {
      return res.status(422).json({
        data: {
          success: false,
          message: "Username or Password Incorrect",
        },
      });
      // console.log("Username or Password Incorrect");
    }
  } catch (err) {
    console.log(`Error in userLogin ${err}`);
  }
};

module.exports.authenticate = function (req, res) {
  // console.log(req.body);

  return res.status(200).json({
    data: {
      success: true,
    },
  });
};
