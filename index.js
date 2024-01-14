const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const { readdirSync } = require("fs");
readdirSync("./routes").map((file) =>
  app.use("/", require("./routes/" + file))
);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

require("dotenv").config();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
