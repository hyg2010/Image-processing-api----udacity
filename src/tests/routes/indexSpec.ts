import supertest from 'supertest';
import app from '../../index';
import imageResize from '../../utilities/imageResize';

//test api route
const request = supertest(app);



describe('Test endpoint responses', () => {
    it('gets the api endpoint', async (done) => {
        const response = await request.get('/api');
        expect(response.status).toBe(200);
        done();
    }
);});


//test for invalid parameters on images for width + height
it('invalid parameters on api/images endpoint returns 400', async () => {
    const response = await request.get('/api/images');
    expect(response.status).toBe(400);
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
  
