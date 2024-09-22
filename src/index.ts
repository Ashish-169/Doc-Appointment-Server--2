import express from "express";
import cors from "cors";
import http from "http";
import { configDotenv } from "dotenv";
import { doctor_route } from "./module/doctor/router";
import { common_route } from "./common/common_route";
import { initializeMongo } from "./config/database";
import morgan from "morgan";

configDotenv();

const port = process.env.PORT || 8000;
const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.use(cors());
app.use(common_route);
app.use("/doctor", doctor_route);

initializeMongo();

const server = http.createServer(app);

server.listen(port, () => {
  console.log(
    `server running on port ${port} and url http://localhost:${port}/`
  );
});

module.exports = app;
