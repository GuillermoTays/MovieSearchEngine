const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const moviesRouter = require("./routes/movies");

app.use("/movies", moviesRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
