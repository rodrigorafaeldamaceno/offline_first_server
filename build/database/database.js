"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const mongoose_1 = __importDefault(require("mongoose"));
const mongoAtlas = `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@analyticsapp.xsvmz.gcp.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`;
const mongoLocal = `mongodb://${process.env.HOST}/${process.env.DATABASE}`;
mongoose_1.default.connect(mongoLocal, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
exports.default = mongoose_1.default;
