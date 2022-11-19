"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("welcome from client side");
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var imagesPath = path_1.default.join(__dirname, "../../../assets/images");
var imageNames = [];
fs_1.default.readdir(imagesPath, function (err, files) {
    files.forEach(function (file) {
        var fileName = file.split('.')[0];
        imageNames.push(fileName);
    });
});
console.log(imageNames);
