const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const app = express();
const usersRoute = require("./routes/usersRoute")

const connectDB = require("./config/connectDB");

const bloggersRoute = require("./routes/bloggersRoute");

dotenv.config();

//Connecting to the database
connectDB();

//Middle wares
app.use(express.json());
app.use(morgan("dev"));

//Routes
app.use("/api/v6/bloggers", bloggersRoute);
app.use("/api/v6/users", usersRoute);

//Default / Home route
app.get("/", (req, res) => {
  res.send("<h2> Welcome to Ghana bloggers API</h2>");
});

const PORT = process.env.PORT || 2021;

app.listen(PORT, () => console.log(`Server Started on https://localhost:${PORT}`));
