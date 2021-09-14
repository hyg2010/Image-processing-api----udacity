import express from 'express';
const images = express.Router();
import fs from 'fs';
import sharp from 'sharp';
import imageResize from '../../utilities/imageResize';
import path from 'path';

images.get('/'), (req: express.Request, res: express.Response) => {
  const height: number = Number(req.query.height || 200);
  const width: number = Number(req.query.width || 200);
  const filename = req.query.filename as string;

  try {
    fs.accessSync('inputFile/outputFile', fs.constants.R_OK | fs.constants.W_OK);
    res.status(200).send('image succesfully resized');
  } catch (error) {
    res.status(400).send('no access to image!');

  }

  try {
    const imageResize = sharp()
      .resize({
        width: width,
        height: height,
        fit: sharp.fit.cover,
        position: sharp.strategy.entropy
      });

    res.sendFile(path.join(__dirname, '../images/thumb'));

  } catch (error) {
    res.status(400).send('Oops, something went wrong, images cannot be resized');
  }
};



export default images;



