"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_status_codes_1 = require("http-status-codes");
const books_routes_1 = __importDefault(require("./routes/books.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 8000;
app.get('/', (req, res) => {
    res.status(http_status_codes_1.StatusCodes.OK).send('Express+Typescript');
});
app.listen(PORT, () => {
    console.log(`Server ir running on ${PORT}`);
});
app.use(books_routes_1.default);
