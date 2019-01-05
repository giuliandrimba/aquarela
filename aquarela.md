## Aquarela

Framework for high-res generative sketches using Javascript.

### Usage:
Write your generative code using the Two.js API inside `src/sketch.js`. The needs to have 2 methods: `setup` and `draw`.

Your sketch receives 4 parameters:

___two__: 
Your Two.js instance

___Two__: 
The Two.js constructor function

__env__: 

The env object as the specified API:

#### save
Save your artwork w/o stopping its execution (draw loop). The image will be located at `dist/NAME_OF_THE_ARTWORK`.

#### done
Save your artwork stopping its execution (draw loop). The image will be located at `dist/NAME_OF_THE_ARTWORK`.

#### loadImage
Loads an image from the public folder (browser and server), it has a callback as a paremeter returning the Image element.

#### type
Return if the environment is server or browser.

#### Config
You can change your artwork configuration at `config.json`

#### Running

To run your sketch on a high-resolution canvas in the server, run `npm run server`.

To run your sketch in a browser, run `npm run browser`.
