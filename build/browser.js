const Two = require('two.js')
const env = require('./browser/env');
const sketch = require('../src/sketch')
const loop = require('raf-loop');
const scale = require('./scale');

const engine = loop(function(dt) { sketch.draw() }).start()
const browserEnv = env(engine);
const { context, canvas } = browserEnv.createContext(true)

console.log(context.canvas.width)

const two = new Two({
    width: canvas.width,
    height: canvas.height,
    domElement: canvas
})

const globals = {
    _context: context,
    _canvas: canvas,
    _two: two,
    _Two: Two,
}
sketch.setup(globals, browserEnv, scale(context));
