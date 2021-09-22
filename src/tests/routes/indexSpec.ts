import supertest from 'supertest';
import app from '../../index';
import imageResize from '../../utilities/imageResize';


//test api route
const request = supertest(app);

//test for successful resized endpoint with query parameters

it('testing endpoint for invalid width and height', async () => {
  const response = await request.get('/api/images?fileName=fjord&width=-5&height=-50');
  expect(response.status).toBe(500);
});


//test endpoint for invalid parameter response

it('testing endpoint for valid parameters', async () => {
  const response = await request.get('/api/?filename=fjord.jpg&width=200&height=200');
  expect(response.status).toBe(200);
});

//image processing function test 

describe('test image processing function', () => {
  const fileName = 'fjord';
  const height = 500;
  const width = 500;
  const outputFile = `images/thumb/${fileName}-resized-${width}-${height}.jpg`;

  it('checks if the file exist in the cache after resizing', async () => {
    await imageResize(fileName, width, height);
    await request.get('/api/?filename=fjord&width=500&height=500');
    expect(outputFile).toEqual('images/thumb/fjord-resized-500-500.jpg');
  });
});

