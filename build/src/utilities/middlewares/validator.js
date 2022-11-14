"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
// eslint-disable-next-line @typescript-eslint/ban-types
var validator = function (req, res, next) {
    var imagesPath = path_1.default.join(__dirname, "../../../assets/images");
    try {
        var imageNames_1 = [];
        fs_1.default.readdir(imagesPath, function (err, files) {
            files.forEach(function (file) {
                var fileName = file.split('.')[0];
                imageNames_1.push(fileName);
            });
            if (Object.keys(req.query).length == 0) {
                res.sendFile(path_1.default.join(__dirname, '../../../views/processor.html'));
            }
            else {
                Object.keys(req.query).forEach(function (Parma) {
                    if (req.query[Parma] == '') {
                        res.sendFile(path_1.default.join(__dirname, '../../../views/processor.html'));
                    }
                    else {
                        console.log(req.query["imageName"]);
                    }
                });
            }
        });
    }
    catch (err) {
        console.log(err);
    }
    next();
};
exports.default = validator;
