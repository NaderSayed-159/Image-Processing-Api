"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var imageDataset = express_1.default.Router();
var imageNamesDataSet = [];
imageDataset.get('/', function (req, res) {
    var imagesPath = path_1.default.join(process.cwd(), "./assets/images");
    fs_1.default.readdir(imagesPath, function (err, files) {
        files.forEach(function (file) {
            if (file.endsWith('.jpg') || file.endsWith('.png')) {
                var fileName = file.split('.')[0];
                imageNamesDataSet.push(fileName);
            }
        });
        res.json(imageNamesDataSet);
    });
});
exports.default = imageDataset;
