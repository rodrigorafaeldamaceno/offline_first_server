import express, { Request, Response } from "express";
import routes from "./routes/routes";
import "./database/database";

var port = process.env.PORT || 3333;

const app = express();

app.use(express.json());
app.use(routes);

app.listen(port);
