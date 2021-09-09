import req from 'express/lib/request';
import supertest from 'supertest';
import app from '../../index';
import imageResize from '../../utilities/imageResize';

//test api route
const request = supertest(app);

//test for successful resized endpoint with query parameters

it('tesing endpoint for resized images', async () => {
    const response = await request.get('/api/images?filename=fjord.jpg&width=200&height=200');
    expect(response.status).toBe(200);
  });
  

