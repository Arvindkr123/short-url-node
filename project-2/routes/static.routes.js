import express from "express";
import { UrlModel } from "../models/url.models.js";
import { restrictTo } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/admin/urls", restrictTo(["ADMIN"]), async (req, res) => {
  const allUrls = await UrlModel.find({});
  // console.log(allUrls);
  return res.render("home", {
    urls: allUrls,
  });
});

router.get("/", restrictTo(["NORMAL", "ADMIN"]), async (req, res) => {
  const allUrls = await UrlModel.find({
    createdBy: req.user?._id,
  });

  // console.log(allUrls);
  return res.render("home", {
    urls: allUrls,
  });
});

router.get("/signup", (req, res) => {
  return res.render("signup");
});
router.get("/login", (req, res) => {
  return res.render("login");
});

export default router;
