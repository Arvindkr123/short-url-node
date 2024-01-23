import { UserModel } from "../model/user.models.js";

export const getUsersController = async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.status(200).json({ success: true, users });
  } catch (error) {
    console.log(error.message);
  }
};

export const postUsersController = async (req, res, next) => {
  try {
    if (
      !req.body ||
      !req.body.firstName ||
      !req.body.lastName ||
      !req.body.email ||
      !req.body.gender ||
      !req.body.jobTitle
    ) {
      return res
        .status(403)
        .json({ success: false, message: "all fields are required" });
    }

    const newUser = await UserModel.create(req.body);
    await newUser.save();
    res.status(201).json({
      success: true,
      message: "User created successfully!!",
      newUser: newUser,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateUsersController = async (req, res) => {
  const id = req.params.id;
  if (
    !req.body ||
    !req.body.firstName ||
    !req.body.lastName ||
    !req.body.email ||
    !req.body.gender ||
    !req.body.jobTitle
  ) {
    return res
      .status(403)
      .json({ success: false, message: "all fields are required" });
  }
  await UserModel.findByIdAndUpdate(id, {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    gender: req.body.gender,
    jobTitle: req.body.jobTitle,
  });
  res.status(200).json({ success: true, message: "updated user successfully" });
  try {
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteUsersController = async (req, res) => {
  try {
    await UserModel.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    console.log(error.message);
  }
};

export const getSingleUsersController = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findById(id);
    res.status(200).json({ success: true, user });
  } catch (error) {
    console.log(error.message);
  }
};
