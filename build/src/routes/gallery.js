"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var gallery = express_1.default.Router();
gallery.get('/', function (req, res) {
    res.sendFile(path_1.default.join(process.cwd(), './views/resizedGallary.html'));
});
exports.default = gallery;
