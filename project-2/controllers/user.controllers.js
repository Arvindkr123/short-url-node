import { v4 as uuidv4 } from "uuid";
import { UserModel } from "../models/user.models.js";
import { setUser } from "../service/auth.js";

export const handleUserSignUp = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res
        .status(403)
        .json({ success: false, message: "All fields are required" });
    }
    await UserModel.create({
      name,
      email,
      password,
    });
    return res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

export const handleUserlogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(403)
        .json({ success: false, message: "All fields are required" });
    }
    const user = await UserModel.findOne({ email, password });
    if (!user) {
      return res.render("login", {
        error: "Invalid username or password",
      });
    }
    const token = setUser(user);
    res.cookie("token", token);
    return res.redirect("/");

    // res.status(200).json({ token });
  } catch (error) {
    console.log(error);
  }
};
