import express from 'express';
import images from './api/images';
const routes = express.Router();




// define a route handler 
routes.get('/', (req: express.Request, res: express.Response) => {
    res.send('Resizing API');
});

routes.use('/images', images);

export default routes;