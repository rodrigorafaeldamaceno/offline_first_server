import express, { Request, Response } from "express";

const app = express();

app.get("/", async (request: Request, response: Response) => {
  return response.json({ status: "online" });
});

app.listen(3333);
