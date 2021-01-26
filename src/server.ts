import express, { Request, Response } from "express";
import routes from "./routes/routes";
import "./database/database";


const app = express();


app.use(express.json());
app.use(routes);

app.listen(3333);
