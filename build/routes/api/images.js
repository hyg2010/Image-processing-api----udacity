"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var images = express_1.default.Router();
var fs_1 = __importDefault(require("fs"));
var sharp_1 = __importDefault(require("sharp"));
var path_1 = __importDefault(require("path"));
images.get('/'), function (req, res) {
    var height = Number(req.query.height || 200);
    var width = Number(req.query.width || 200);
    var filename = req.query.filename;
    try {
        fs_1.default.accessSync('inputFile/outputFile', fs_1.default.constants.R_OK | fs_1.default.constants.W_OK);
        res.status(200).send('image succesfully resized');
    }
    catch (error) {
        res.status(400).send('no access to image!');
    }
    try {
        var imageResize_1 = sharp_1.default()
            .resize({
            width: width,
            height: height,
            fit: sharp_1.default.fit.cover,
            position: sharp_1.default.strategy.entropy
        });
        res.sendFile(path_1.default.join(__dirname, '../images/thumb'));
    }
    catch (error) {
        res.status(400).send('Oops, something went wrong, images cannot be resized');
    }
};
exports.default = images;
