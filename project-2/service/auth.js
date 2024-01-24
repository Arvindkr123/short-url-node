import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export function setUser(user) {
  return jwt.sign(
    { _id: user._id, email: user.email, role: user.role },
    process.env.JWT_SECRET
  );
}
export function getUser(token) {
  // console.log(token) 
  if (!token) return null;
  return jwt.verify(token, process.env.JWT_SECRET);
}
