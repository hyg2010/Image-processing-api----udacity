import path from 'path';
import fs from 'fs';
import sharp from 'sharp';

const imageResize = async (
  fileName: string,
  width: number,
  height: number
): Promise<string> => {
  const inputFile = `images/full/${fileName}.jpg`;
  const outputFile = `images/thumb/${fileName}-resized-${width}-${height}.jpg`;

  if (fs.existsSync(path.join(__dirname, '../../', outputFile))) {
    console.log('cached image');
    return outputFile;
  } else {
    await sharp(inputFile).resize(width, height).jpeg().toFile(outputFile);
    console.log('image successfully resized');
    return outputFile;
  }
};

export default imageResize;