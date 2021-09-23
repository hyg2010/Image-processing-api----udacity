import express from 'express';
import imageResize from '../../utilities/imageResize';
import path from 'path';
import fs, { existsSync } from 'fs';

const images = express.Router();

images.get(
  '/',
  async (req: express.Request, res: express.Response): Promise<void> => {
    const height = parseInt(req.query.height);
    const width = parseInt(req.query.width);
    const filename = req.query.filename as string;

    const sourceFile = path.join(
      __dirname,
      '../../../images/full',
      `/${filename}.jpg`
    );
    const cachePath = path.join(
      __dirname,
      '../../../images/thumb',
      `${filename}-${width}-${height}.jpg`
    );

    //Check if Parameters are valid, if not send back error message
    if (!req.query.filename && !req.query.width && !req.query.height) {
      res
        .status(404)
        .send(
          'Error,Please provide a valid file, image width, and image height'
        );
    } else {
      if (Number(req.query.height) && Number(req.query.width) <= 0) {
        console.log('Please input a positive width + height');
      } else {
        if (Number(req.query.width) && Number(req.query.height) <= 0) {
          console.log('Please input a positive width + height');
        }
      }
    }
    //Check if the filename has a source folder.

    try {
      fs.existsSync(sourceFile);
      console.log('file or directory exists');
    } catch (err) {
      if (err) {
        console.log('file or directory does not exist');
      }
    }
    //check if cached version exist or not
    if (existsSync(cachePath)) {
      res.sendFile(cachePath);
    } else {
      try {
        await imageResize(filename, width, height);
        res.sendFile(cachePath);
      } catch (err) {
        res.status(500).send('Please provide a valid image file');
      }
    }
  }
);

export default images;
