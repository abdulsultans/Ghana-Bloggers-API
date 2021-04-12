const Blogger = require("../models/bloggerSchema");

// Add a new blogger to the database
const createBlogger = async (req, res) => {
  const newBlogger = new Blogger({
    name: req.body.name,
    position: req.body.position,
    email: req.body.email,
    dob: req.body.dob,
    region: req.body.region,
  });

  await newBlogger.save();
  res.status(202).json(newBlogger);
};

//GET all bloggers on the database

const getAllBloggers = async (req, res) => {
  const Bloggers = await Blogger.find();
  res.json(Bloggers);
};

//Get A Blogger
const getSingleBlogger = async (req, res) => {
  const Blogger = await Blogger.findById(req.params._id);
  res.json(Blogger);
};

// Update a Blogger

const updateBlogger = async (req, res) => {
  const foundBlogger = await Blogger.findById(req.params._id);

    const {name, position,email,dob, region} = req.body

  if (foundBlogger) {
    foundBlogger.name = name;
    foundBlogger.position = position;
    foundBlogger.email = email;
    foundBlogger.dob = dob;
    foundBlogger.region=region;

    const updatedBlogger = await foundBlogger.save();
    res.json({ updatedBlogger });
  }
};

//Delete A Blogger

const deleteBlogger = async (req, res) => {
  const foundBlogger = await Blogger.findById(req.params._id);
  if (foundBlogger) {
    foundBlogger.remove();
    res.json({ msg: `${foundBlogger.name} removed` });
  } else {
    res.status(404).json({ error: "Blogger not found" });
  }
};

module.exports = {
  createBlogger,
  getAllBloggers,
  getSingleBlogger,
  updateBlogger,
  deleteBlogger,
};
