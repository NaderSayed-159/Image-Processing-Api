"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resized = void 0;
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
exports.resized = [];
var imagesPath = path_1.default.join(process.cwd(), "./assets/images/thumbnails");
fs_1.default.readdir(imagesPath, function (err, files) {
    files.forEach(function (file) {
        if (file.endsWith('.jpg')) {
            var fileName = file.split('.')[0];
            exports.resized.push(fileName);
        }
    });
});
exports.default = exports.resized;
