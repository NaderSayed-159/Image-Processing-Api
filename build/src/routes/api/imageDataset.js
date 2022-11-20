"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var imageDataset = express_1.default.Router();
imageDataset.get('/', function (req, res) {
    var imageNames = [];
    var imagesPath = path_1.default.join(process.cwd(), "./assets/images");
    fs_1.default.readdir(imagesPath, function (err, files) {
        files.forEach(function (file) {
            if (file.endsWith('.jpg')) {
                var fileName = file.split('.')[0];
                imageNames.push(fileName);
            }
        });
        res.json(imageNames);
    });
});
exports.default = imageDataset;
