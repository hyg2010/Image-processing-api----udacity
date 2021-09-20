import express from 'express';
import imageResize from '../../utilities/imageResize';
import path from 'path';
import fs, { existsSync } from 'fs';


const images = express.Router();

images.get('/', async (req: express.Request, res: express.Response): Promise<void> => {
    const height = (req.query.width as unknown) as number;
    const width = (req.query.height as unknown) as number;
    const fileName = req.query.fileName as string;

    const sourceFile = `images/full/${fileName}.jpg`;
    const outputFolder = path.join(__dirname, '../../images/thumb', `${fileName}-${width}-${height}.jpg`);

    //Check if Parameters are valid, if not send back error message
    if (!req.query.fileName && !req.query.width && req.query.height) {
        res.status(404).send('Error,Please provide a valid file, image width, and image height')
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
    if (existsSync(outputFolder)) {
        console.log('folder exist')
    } else {
        try {
            await imageResize(fileName, height, width)
                .then((outputFolder) => {
                    res.sendFile(outputFolder);
                }
                );
        } catch (err) {
            res.status(500).send('invalid width and height, please try again')
        }
    }
}

);



export default images;