# Image Processing API project (Udacity)

## Overview

Create an image processing API to resize images provided by the client user. The image is resized by uploading a file and resizing the width and height. 

## Install all dependencies from package.json
    -$ npm install 
    
## Build
  "npm run build" will compile the typescript code into the javascript build folder.
  
## Tools and Resources

1. Typescript

2. Express for routers

3. Jasmine- (Unit Testing)

4. Eslint 

5. Prettierrc 

6. Sharp--For resizing the images.

7. Supertest (For testing with Jasmine)


## Starting the Server & resizing the image on the endpoint 
  -"NPM RUN START"-- This will start the server at http://localhost:4000 
  
  -Once the server is started, you can resize the image by typing in a filename (jpg), width, and height. Width and height need to be positive or else you will get an error.

  i.e http://localhost:4000/api/images?filename=fjord&width=500&height=500

  --The example above will resize the image to 500 x 500. 

  
 ## Testing (Jasmine + lint) Endpoint Testing and Image Resizing Testing

 -Start the jasmine test by typing "npm run test" 

-Jasmine is used to test the api endpoints and imageresize function.

## Endpoint Testing
-The first test includes testing the endpoint for a client inputting an invalid width and height. This should result in a 500 error message 

-The second test includes testing the endpoint for a valid width + height. This should result to the response status of 200 on the browser. 

-The third test includes the imageresizing function test with sharp. This should test to see if the resized image shows up in the cache folder. 
 
 ## Attribution 

-https://sharp.pixelplumbing.com/api-resize
-https://nodejs.org/en/
-https://www.typescriptlang.org/
-https://jasmine.github.io/
-https://www.npmjs.com/package/supertest
-https://knowledge.udacity.com/
