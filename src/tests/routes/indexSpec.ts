import supertest from 'supertest';
import app from '../../index';
import imageResize from '../../utilities/imageResize';
import fs from 'fs';
import outputFile from '../../utilities/imageResize';

//test api route
const request = supertest(app);

//test for successful resized endpoint with query parameters

it('testing endpoint for resized images', async () => {
  const response = await request.get('/api/images?filename=fjord.jpg&width=200&height=200');
  expect(response.status).toBe(200);
});


//test endpoint for invalid parameter response

it('testing endpoint for invalid parameters', async () => {
  const response = await request.get('/api/?filename=&width=0&height=0');
  expect(response.status).toBe(404);
});

//image processing function test 

describe('testing imageResizer Image Processor', () => {
  const filename = 'fjord';
  const height = 500;
  const width = 500;
  it('checks if the image file exist', async () => {
    fs.accessSync('images', fs.constants.R_OK | fs.constants.W_OK);
    await imageResize(filename, width, height);
    expect(outputFile).toEqual('filename=fjord.jpg&width=500&height=500')
  });

});

