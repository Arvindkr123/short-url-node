import shortid from "shortid";
import { UrlModel } from "../models/url.models.js";

export const postUrlController = async (req, res, next) => {
  try {
    const body = req.body;
    if (!body.url) {
      return res
        .status(403)
        .json({ success: false, message: "url is required" });
    }
    const shortId = shortid();
    await UrlModel.create({
      shortId,
      shortUrl: body.url,
      visitHistory: [],
      createdBy: req.user._id,
    });
    return res.render("home", {
      id: shortId,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const getShortIdUrlController = async (req, res, next) => {
  try {
    const shortId = req.params.id;
    // console.log(shortId);
    const entry = await UrlModel.findOneAndUpdate(
      { shortId },
      { $push: { visitHistory: { timestamp: Date.now() } } }
    );
    res.redirect(entry?.shortUrl);
  } catch (error) {
    console.log(error.message);
  }
};

export const getAnalyticsUrlController = async (req, res, next) => {
  try {
    const shortId = req.params.id;
    const result = await UrlModel.findOne({ shortId });
    return res.status(200).json({
      success: true,
      totalClicks: result.visitHistory.length,
      analytics: result.visitHistory,
    });
  } catch (error) {
    console.log(error.message);
  }
};
