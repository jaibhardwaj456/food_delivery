import express from "express";
import mongoDB from "./db.js";
import router from "./Routes/createUser.js";
import disp_router from "./Routes/DisplayData.js";
import order_router from "./Routes/OrderData.js";
const app = express();
const port = 5000;
mongoDB();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-type, Accept"
  );
  next();
});
app.get("/", (req, res) => {
  res.send("Hello world");
});
app.use(express.json());
app.use("/api", router);
app.use("/api", disp_router);
app.use("/api", order_router);
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
