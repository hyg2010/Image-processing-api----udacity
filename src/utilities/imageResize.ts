import sharp from 'sharp';

const imageResize = async (
  filename: string,
  width: number,
  height: number
): Promise<string> => {
  const inputFile = `images/full/${filename}.jpg`;
  const outputFile = `images/thumb/${filename}-${width}-${height}.jpg`;

  await sharp(inputFile).resize(width, height).jpeg().toFile(outputFile);
  console.log('image successfully resized');
  return outputFile;
};

export default imageResize;
