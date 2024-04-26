const express = require("express");
const cors = require("cors");
const dotEnv = require("dotenv");
const getConnection = require("./config/db");
const app = express();
const quizRoutes = require("./routes/quiz");
 const userRoutes = require("./routes/user");
// const routes = require("./routes");

//registering middlewares
 dotEnv.config();
app.use(cors());
app.use(express.json());
app.use("/api/quiz", quizRoutes);
app.use("/api/quiz", userRoutes);
// app.use("/api", routes);
// app.use( routes);

//connecting TO DB
getConnection();

//listening to port
const port = process.env.PORT || 3030;

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});



