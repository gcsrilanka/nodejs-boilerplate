const asyncHandler = require("../middleware/async");
const User = require("../models/User");

// @desc      Create user
// @route     POST /api/v1/users
// @access    Public
exports.createUser = asyncHandler(async (req, res, next) => {
  const user = await User.create(req.body);

  res.status(201).json({
    success: true,
    data: user,
  });
});