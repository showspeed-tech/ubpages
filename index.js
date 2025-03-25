import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./src/routes/authRoute.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/api/auth", router);
app.all("*", (req, res, next) => {
  res.send(`The url path ${req.originalUrl} cannot be found`);
});

app.listen(PORT, () => {
  console.log(`app running on port  ${PORT}`);
});
