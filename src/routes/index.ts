import express from 'express';
import images from './api/images';
const routes = express.Router();




// define a route handler 
routes.get('/images', (req: express.Request, res: express.Response) => {
    res.send('image is resizing');
});

routes.use('/images', images);

export default routes;