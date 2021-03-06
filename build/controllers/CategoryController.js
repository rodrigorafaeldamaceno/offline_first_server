"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CategoryModel_1 = __importDefault(require("../models/CategoryModel"));
exports.default = {
    async index(req, res) {
        try {
            const categories = await CategoryModel_1.default.find();
            return res.json(categories);
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({ error: "internal server error" });
        }
    },
    async store(req, res) {
        const { name, id } = req.body;
        if (!name)
            return res.status(403).json({ error: "Name is required" });
        const category = await CategoryModel_1.default.create({ name: name, id: id });
        return res.json(category);
    },
    async delete(req, res) {
        const { id } = req.params;
        console.log(id);
        if (!id)
            return res.status(403).json({ error: "id is required" });
        const category = await CategoryModel_1.default.findByIdAndRemove(id, {
            useFindAndModify: true,
        });
        if (!category)
            return res.status(403).json({ error: "Category doesn`t exists" });
        return res.json(category);
    },
};
