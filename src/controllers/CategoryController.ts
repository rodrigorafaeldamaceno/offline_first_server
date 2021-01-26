import { Request, Response } from "express";
import CategoryModel from "../models/CategoryModel";

export default {
  async index(req: Request, res: Response) {
    const categories = await CategoryModel.find();

    return res.json(categories);
  },
  async store(req: Request, res: Response) {
    const { name, id } = req.body;

    if (!name) return res.status(403).json({ error: "Name is required" });

    const category = await CategoryModel.create({ name: name, id: id });

    return res.json(category);
  },
  async delete(req: Request, res: Response) {
    const { id } = req.params;

    console.log(id);
    if (!id) return res.status(403).json({ error: "id is required" });

    const category = await CategoryModel.findByIdAndRemove(id, {
      useFindAndModify: true,
    });
    if (!category)
      return res.status(403).json({ error: "Category doesn`t exists" });

    return res.json(category);
  },
};
