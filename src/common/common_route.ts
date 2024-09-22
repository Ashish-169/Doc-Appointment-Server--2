import express from "express";

//comment to push to git

export const common_route = express.Router();

common_route.get("/", (req: express.Request, res: express.Response) => {
  res.json({ message: "Server is up and running" });
});

common_route.get("/health", (req: express.Request, res: express.Response) => {
  res.json({ message: "Server is healthy, up and running" });
});
