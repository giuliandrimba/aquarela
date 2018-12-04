const Two = require('two.js')
const env = require('./browser/env');
const sketch = require('../src/sketch')
const loop = require('raf-loop');
const scale = require('./scale');

const engine = loop(function(dt) { sketch.draw() }).start()
const browserEnv = env(engine);
const { context, canvas } = browserEnv.createContext(true)

const two = new Two({
    width: browserEnv.PRINT_WIDTH,
    height: browserEnv.PRINT_HEIGHT,
    domElement: canvas
})

const globals = {
    context,
    canvas,
    two
}
sketch.setup(globals, browserEnv, scale(context));
