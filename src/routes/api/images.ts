import express from 'express';
import fs from 'fs';
import imageResize from '../../utilities/imageResize';
import path from 'path';


const images = express.Router();


//check if parameters are good, if not send back error message
images.get('/'), async (req: express.Request, res: express.Response) => {
  const height: number = Number(req.query.height || 200);
  const width: number = Number(req.query.width || 200);
  const fileName = req.query.filename as string;

  let thumbPath: string =
    path.resolve(__dirname, '../', '../', 'images/', 'thumb/', fileName) + `-${width}-${height}.jpg`;

  if (fs.statSync(thumbPath)) {
    res.sendFile(thumbPath);
  } else {
    const resizeImage = await imageResize(
      fileName as string,
      width,
      height
    );
    if (!resizeImage) {
      res.status(200).sendFile(resizeImage)
    } else {
      if (width < 0 && height < 0) {
        res.status(404).send('Please provide a valid number for the width & height')
      }
    }


  };

}


export default images;