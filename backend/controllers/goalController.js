const asyncHandler = require("express-async-handler");

//@desc Get goals
//@route GET/api/goals
//@access Private

const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get goals" });
});

//@desc Set goal
//@route POST/api/goals
//@access Private

const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Plese use only texts in the input field");
    // .json({ message: "Please use only texts in the input field." });
  }
  res.status(200).json({ message: "Set goal" });
});

//@desc Update goals
//@route PUT/api/goals/:id
//@access Private

const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Updated goal ${req.params.id}` });
});

//@desc Delete goals
//@route DELETE/api/goals/:id
//@access Private

const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Deleted goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
