import supertest from 'supertest';
import app from '../../index';
import imageResize from '../../utilities/imageResize';

//test api route
const request = supertest(app);



//test for successful resized image
it('tesing endpoint for resized images', async () => {
    const response = await request.get('/api/images');
    expect(response.status).toBe(200);
  });
  


 //Image width + height resize to be greater than 0

 it('expects Resized Image result to be great than 0', async () => {
    const fileName = 'fjord.jpg';
    const width = 200;
    const height = 200;
    return imageResize().then ( result => {
        expect(imageResize).toBeGreaterThan(0);
    })
 });
