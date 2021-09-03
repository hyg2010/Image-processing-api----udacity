import express from 'express';
import images from './api/images';
const routes = express.Router(); 




// define a route handler 
routes.get('/images', (req: express.Request, res: express.Response) => {
    res.send('Image is Resizing');
});

routes.use('/images', images);

export default routes;