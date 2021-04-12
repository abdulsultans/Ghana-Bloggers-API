const express = require("express");

const {
  createBlogger,
  getAllBloggers,
  getSingleBlogger,
  updateBlogger,
  deleteBlogger,
} = require("../controllers/bloggersController");

const router = express.Router();

router.route("/").post(createBlogger).get(getAllBloggers);
router
  .route("/:_id")
  .get(getSingleBlogger)
  .put(updateBlogger)
  .delete(deleteBlogger);

module.exports = router;
