"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database/database"));
const CategoruSchema = new database_1.default.Schema({
    id: {
        type: Number,
    },
    name: {
        type: String,
        required: true,
    },
});
exports.default = database_1.default.model("Category", CategoruSchema);
