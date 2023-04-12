const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const foodRoutes = require("./routes/foodRoutes");

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// routing middleware
app.use("/api", foodRoutes);

// error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
