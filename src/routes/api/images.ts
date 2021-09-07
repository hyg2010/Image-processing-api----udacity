import express, { request, response } from 'express';
const images = express.Router();
import fs from 'fs';
import res from 'express/lib/response';
import sharp from 'sharp'




images.get("/", (req: express.Request, res: express.Response) => {

try {
  fs.accessSync('inputFile/outputFile', fs.constants.R_OK | fs.constants.W_OK);
  res.status(200).send('image found')
} catch (error) {
  res.status(400).send('no access to image!');

}}); 

try {
const imageResize = sharp()
  .resize({
    width:  width,
    height: height,
    fit: sharp.fit.cover,
    position: sharp.strategy.entropy
  });

  res.sendFile('outputFile');
  
} catch (error) {
   res.status(400).send('Oops, something went wrong, images cannot be resized')
}}


export default images; 
