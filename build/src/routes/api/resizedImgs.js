"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
// eslint-disable-next-line  @typescript-eslint/ban-types
var resizedImgs = function (req, res, next) {
    var resized = [];
    var resizedimgName = req.query["imageName"];
    var imgWidth = parseInt(req.query["imgWidth"]);
    var imgHeight = parseInt(req.query["imgHeight"]);
    var imagesPath = path_1.default.join(process.cwd(), "./assets/images/thumbnails");
    fs_1.default.readdir(imagesPath, function (err, files) {
        files.forEach(function (file) {
            if (file.endsWith('.jpg')) {
                var fileName = file.split('.')[0];
                resized.push(fileName);
            }
        });
        console.log('bool', resized.includes("".concat(resizedimgName, "_").concat(imgWidth, "_").concat(imgHeight)));
        if (resized.includes("".concat(resizedimgName, "_").concat(imgWidth, "_").concat(imgHeight))) {
            return res.sendFile(path_1.default.join(process.cwd(), "/assets/images/thumbnails/".concat(resizedimgName, "_").concat(imgWidth, "_").concat(imgHeight, ".jpg")));
        }
    });
    next();
};
exports.default = resizedImgs;
