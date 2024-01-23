import { getUser } from "../service/auth.js";

export async function restrictTOUserLoginOnly(req, res, next) {
  //   console.log(req);
  const userUid = req.cookies?.uid;
  if (!userUid) {
    res.redirect("/login");
  }
  const user = getUser(userUid);
  //   console.log(user)
  if (!user) {
    res.redirect("/login");
  }
  req.user = user;
  next();
}

export const checkAuth = (req, res, next) => {
  const userUid = req.cookies.uid;

  const user = getUser(userUid);

  req.user = user;
  next();
};
