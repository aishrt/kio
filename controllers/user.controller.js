const catchAsync = require("../utils/catchAsync");
const { User } = require("../models");

const getProfile = catchAsync(async (req, res) => {
  try {
    const userId = req.params.id;
    const userDetail = await User.findById(userId);
    return res.status(200).json({
      status: "200",
      message: "User data fetched successfully!",
      data: userDetail,
    });
  } catch (error) {
    return res.status(500).json({
      status: "500",
      message: "An error occurred while fetcihng user data !",
      error: error.message,
    });
  }
});

const updateProfile = catchAsync(async (req, res) => {
  try {
    const userId = req.params.id;
    const userDetail = await User.findOneAndUpdate({ _id: userId }, req.body, {
      new: true,
    });
    userDetail.save();
    return res.status(200).json({
      status: "200",
      message: "User data updated successfully!",
      data: userDetail,
    });
  } catch (error) {
    return res.status(500).json({
      status: "500",
      message: "An error occurred while updating user data !",
      error: error.message,
    });
  }
});
const deleteProfile = catchAsync(async (req, res) => {
  try {
    const userId = req.params.id;
    await User.findOneAndDelete({ _id: userId });
    return res.status(200).json({
      status: "200",
      message: "User deleted successfully!",
    });
  } catch (error) {
    return res.status(500).json({
      status: "500",
      message: "An error occurred while deleting user data !",
      error: error.message,
    });
  }
});

const getList = catchAsync(async (req, res) => {
  const currentUser = req.user;
  const selectesRole = req.query.role;
  const searchName = req.query.name;
  const perPage = 10;
  const page = req.query.page ? parseInt(req.query.page, 10) : 1;
  const query = {
    _id: { $ne: currentUser },
    role: selectesRole,
  };
  // if (searchName) {
  //   query.first_name = { $regex: new RegExp(searchName, "i") };
  // }
  if (searchName) {
    const searchValue = new RegExp(searchName, "i");
    query.$or = [{ first_name: searchValue }, { email: searchValue }];
  }
  try {
    const totalCount = await User.countDocuments(query);
    const userList = await User.find(query)
      .skip(perPage * (page - 1))
      .limit(perPage);
    return res.status(200).json({
      status: "200",
      message: "User list fetched successfully!",
      data: userList,
      page,
      totalPages: Math.ceil(totalCount / perPage),
      count: userList.length,
    });
  } catch (error) {
    return res.status(500).json({
      status: "500",
      message: "An error occurred while fetching user list!",
      error: error.message,
    });
  }
});

module.exports = {
  getProfile,
  updateProfile,
  getList,
  deleteProfile,
};
