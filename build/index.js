"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = process.env.PORT || 3050;
app.get("/", (req, res) => {
    res.send("Tracflo API Test 7");
});
app.get("/hello", (req, res) => {
    res.send("Hello world");
});
app.listen(port, () => {
    console.log(`server is up and running on port ${port}`);
});
