"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CategoryController_1 = __importDefault(require("../controllers/CategoryController"));
const routes = express_1.Router();
routes.get("/", async (request, response) => {
    return response.json({ status: "online" });
});
routes.get("/categories", CategoryController_1.default.index);
routes.post("/category", CategoryController_1.default.store);
routes.delete("/category/:id", CategoryController_1.default.delete);
exports.default = routes;
