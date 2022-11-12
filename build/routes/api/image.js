"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var validator_1 = __importDefault(require("../../utilities/middlewares/validator"));
var image = express_1.default.Router();
image.get('/', validator_1.default, function (req, res) {
    res.sendFile(path_1.default.join(__dirname, '../../../views/resizedImage.html'));
});
exports.default = image;
