"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var image = express_1.default.Router();
image.get('/', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, '../../../views/resizedImage.html'));
    var imagesPath = path_1.default.join(__dirname, "../../../assets/images");
    try {
        var imageNames_1 = [];
        fs_1.default.readdir(imagesPath, function (err, files) {
            files.forEach(function (file) {
                var fileName = file.split('.')[0];
                imageNames_1.push(fileName);
            });
        });
        if (Object.keys(req.query).length == 0) {
            console.log("empty");
        }
        // else if (Object.keys(req.query).length != 0) {
        //     Object.keys(req.query).forEach(Parma => {
        //         if (req.query[Parma] == '') {
        //             res.sendFile(path.join(__dirname, '../../../views/processor.html'));
        //         }
        //     })
        // } else {
        //     res.sendFile(path.join(__dirname, '../../views/resizedImage.html'));
        //     console.log(req.query["imageName"]);
        // }
    }
    catch (err) {
        console.log(err);
    }
});
exports.default = image;
