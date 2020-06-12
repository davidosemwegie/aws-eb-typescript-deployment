"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./config");
const app = express_1.default();
const port = process.env.PORT || 8080;
app.get("/", (req, res) => {
    res.send("Tracflo API Test v2");
});
app.get("/hope", (req, res) => {
    res.send("I hope this works");
});
app.get("/env", (req, res) => {
    res.send(process.env.VAR);
});
app.get("/value", (req, res) => {
    res.send(`variable: ${config_1.value}`);
});
app.listen(port, () => {
    console.log(`server is up and running on port ${port}`);
});
