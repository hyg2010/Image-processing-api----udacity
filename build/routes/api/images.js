"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var images = express_1.default.Router();
var fs_1 = __importDefault(require("fs"));
var response_1 = __importDefault(require("express/lib/response"));
var sharp_1 = __importDefault(require("sharp"));
images.get("/", function (req, res) {
    try {
        fs_1.default.accessSync('inputFile/outputFile', fs_1.default.constants.R_OK | fs_1.default.constants.W_OK);
        res.status(200).send('image found');
    }
    catch (error) {
        res.status(400).send('no access to image!');
    }
});
try {
    var imageResize = sharp_1.default()
        .resize({
        width: 200,
        height: 200,
        fit: sharp_1.default.fit.cover,
        position: sharp_1.default.strategy.entropy
    });
}
catch (error) {
    response_1.default.status(400).send('Oops, something went wrong, images cannot be resized');
}
exports.default = images;
