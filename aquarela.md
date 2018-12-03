## Aquarela

Boilerplate for high-res generative artwork.

### Usage:
Write your generative code using the HTML Canvas API inside `src/sketch.js`

Your sketch receives 2 parameters, `_ctx`, `_env` and a utility `_scale` function receive a value and keep its ratio the same in the browser and server version.

__ctx__: 
Access to the canvas context used in both browser and server.

__env__: 

When your algorithm is complete, just call `env.done` to save the image at `dist/NAME_OF_THE_ARTWORK`.

If you want to save an image, but continue to run the algorithm, call `env.save`.

Also, make sure you export the methods `setup` and `draw`.

#### Config
You can change your artwork configuration at `config.json`

#### Running

To run your sketch on a high-resolution canvas in the server, run `npm run server`.

To run your sketch in a browser, run `npm run browser`.
