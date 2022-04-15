const asyncHandler = require('express-async-handler');
// @desc   Get goals
// @route  GET /api/Goals
// @access private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'get goals' });
});

// @desc   set goals
// @route  POST /api/Goals
// @access private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(404);
    throw new Error('PLease add text fielt');
  }
  console.log(
    '🚀 ~ file: goalController.js ~ line 12 ~ setGoal ~ req',
    req.body
  );
  res.status(200).json({ message: 'set goals' });
});

// @desc   update goal
// @route  PUT /api/Goals
// @access private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update goal ${req.params.id}` });
});

// @desc   delete goal
// @route  DELETE /api/Goals
// @access private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete goal ${req.params.id}` });
});

module.exports = { getGoals, setGoal, deleteGoal, updateGoal };
