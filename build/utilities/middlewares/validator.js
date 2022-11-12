"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var validator = function (req, res, next) {
    var imagesPath = path_1.default.join(__dirname, "../../../assets/images");
    try {
        var imageNames_1 = [];
        fs_1.default.readdir(imagesPath, function (err, files) {
            files.forEach(function (file) {
                var fileName = file.split('.')[0];
                imageNames_1.push(fileName);
            });
            console.log(req.query);
            if (Object.keys(req.query).length != 0) {
                Object.keys(req.query).forEach(function (query) {
                    console.log(query, req.query[query]);
                    console.log(req.query[query] == '');
                    if (req.query[query] == '') {
                        res.redirect('/api');
                    }
                    else if (imageNames_1.indexOf(req.query["imageName"]) > -1) {
                        console.log(req.query["imageName"]);
                    }
                });
            }
            else {
                res.redirect('/api');
            }
        });
    }
    catch (err) {
        console.log(err);
    }
    next();
};
exports.default = validator;
