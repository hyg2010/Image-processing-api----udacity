# Image Processing API project (Udacity)

## Overview

Create an image processing API to resize images to specific parameters (width X height)

## Install all dependencies, run command 
    -$ npm install 
    
## Build
  "npm run build" will compile the typescript code into the javascript build folder.
## Tools and Resources Used

1. Typescript

2. Express

3. Jasmine- (Unit Testing)

4. Eslint 

5. Prettierrc 

6. Sharp--For resizing the images.

7. Supertest (For testing with Jasmine)


## Starting the Server
  -"NPM RUN START"-- This will start the server at http://localhost:4000 
  
 ## Testing
  -"Npm Run Test" to start test with Jasmine and build the JS folder from Typescript
  -Test if the images resizes from the images/full folder and resized to the output folder (images/thumbs)
  -Test endpoints for resized images by calling parameters and response status should always be 200. 
  -invalid parameters should respond with 404 error. 
  
 ## Endpoint
 The resizing endpoint URl will contain the local host 4000 and the paramters of width + height
    http://localhost:4000/imageResize?w=<width>&h=<height>&image=<filename>
  This endpoint is used to resize the images from the images/full folder into the images/thumbs folder. It will save the resized image in the folder. 

  
 ## Attribution 

-https://sharp.pixelplumbing.com/api-resize
-https://nodejs.org/en/
-https://www.typescriptlang.org/
-https://jasmine.github.io/
-https://www.npmjs.com/package/supertest
-https://knowledge.udacity.com/
