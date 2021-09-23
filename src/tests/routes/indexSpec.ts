import supertest from 'supertest';
import app from '../../index';
import imageResize from '../../utilities/imageResize';

//test api route
const request = supertest(app);

//test for successful resized endpoint with query parameters

it('testing endpoint for invalid width and height', async () => {
  const response = await request.get(
    '/api/images?filename=fjord&width=-5&height=-50'
  );
  expect(response.status).toBe(500);
});

//test endpoint for invalid parameter response

it('testing endpoint for valid parameters', async () => {
  const response = await request.get(
    '/api/?filename=fjord.jpg&width=200&height=200'
  );
  expect(response.status).toBe(200);
});

//image processing function test

describe('test image processing function', () => {
  const filename = 'fjord';
  const height = 600;
  const width = 600;

  it('checks if the file exist that the resizing function creates', async () => {
    const imageFile = await imageResize(filename, width, height);
    expect(imageFile).toEqual('images/thumb/fjord-600-600.jpg');
  });
});
