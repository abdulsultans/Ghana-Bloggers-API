const express = require("express");
const protect = require("../middlewares/authMiddlewares")

const {
  createBlogger,
  getAllBloggers,
  getSingleBlogger,
  updateBlogger,
  deleteBlogger,
} = require("../controllers/bloggersController");

const router = express.Router();

router.route("/").post(protect, createBlogger).get(protect, getAllBloggers);
router
  .route("/:_id")
  .get(protect, getSingleBlogger)
  .put(protect, updateBlogger)
  .delete(protect, deleteBlogger);

module.exports = router;
