## Aquarela

Framework for high-res generative sketches using Javascript.

### Usage:
Write your generative code using the Two.js API inside `src/sketch.js`. The needs to have 2 methods: `setup` and `draw`.

Your sketch receives 4 parameters:

`_two`: 
Your Two.js instance

`_Two`: 
The Two.js constructor function

`_env`: 
The env object as the specified API:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`save`:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Save your artwork w/o stopping its execution (draw loop). The image will be located at `dist/NAME_OF_THE_ARTWORK`.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`done`:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Save your artwork stopping its execution (draw loop). The image will be located at `dist/NAME_OF_THE_ARTWORK`.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`loadImage`:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Loads an image from the public folder (browser and server), it has a callback as a paremeter returning the Image element.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`type`:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Return if the environment is server or browser.

#### Config
You can change your artwork configuration at `config.json`

#### Running

To run your sketch on a high-resolution canvas in the server, run `npm run server`.

To run your sketch in a browser, run `npm run browser`.
