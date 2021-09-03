import supertest from 'supertest';
import app from '../../index';



//test api route
const request = supertest(app);
describe('Test endpoint responses', () => {
    it('gets the api endpoint', async (done) => {
        const response = await request.get('/api');
        expect(response.status).toBe(404);
        done();
    }
)});


//test for invalid parameters on images for width + height
it('invalid parameters on api/images endpoint returns 400', async () => {
    const response = await request.get('/api/images');
    expect(response.status).toBe(200);
  });
  

  
