import { getUser } from "../service/auth.js";

export async function restrictTOUserLoginOnly(req, res, next) {
  // console.log(req.headers);
  // const userUid = req.cookies?.uid;
  const userUid = req.headers["Authorization"];

  if (!userUid) {
    res.redirect("/login");
  }
  const token = userUid?.split("Bearer ")[1];
  const user = getUser(token);
  //   console.log(user)
  if (!user) {
    res.redirect("/login");
  }
  req.user = user;
  next();
}

export const checkAuth = (req, res, next) => {
  // console.log(req.headers);
  const userUid = req.headers["authorization"];
  const token = userUid?.split("Bearer  ")[1];
  const user = getUser(token);

  req.user = user;
  next();
};
