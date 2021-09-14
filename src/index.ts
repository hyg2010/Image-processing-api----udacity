import express from 'express';
import routes from './routes/index';

const app = express();

// Middlewares
app.use('/api', routes);

const port = 4000;

// listen
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});



export default app;

