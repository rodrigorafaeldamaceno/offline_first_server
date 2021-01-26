import { Router, Request, Response } from "express";
import CategoryController from "../controllers/CategoryController";

const routes = Router();

routes.get("/", async (request: Request, response: Response) => {
  return response.json({ status: "online" });
});

routes.get("/categories", CategoryController.index);
routes.post("/category", CategoryController.store);
routes.delete("/category/:id", CategoryController.delete);

export default routes;
