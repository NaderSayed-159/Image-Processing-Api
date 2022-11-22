"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var body_parser_1 = __importDefault(require("body-parser"));
var main_1 = __importDefault(require("./routes/main"));
var app = (0, express_1.default)();
var port = 3000;
app.use(body_parser_1.default.json());
app.use(express_1.default.static(process.cwd()));
app.use(express_1.default.urlencoded({ extended: false }));
app.get("/", function (req, res) {
    res.sendFile(path_1.default.join(process.cwd(), './views/index.html'));
});
app.use('/api', main_1.default);
app.listen(port, function () {
    console.log("welocme on port http://localhost:".concat(port, "/"));
});
exports.default = app;
