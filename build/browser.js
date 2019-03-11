const env = require('./browser/env');
const sketch = require('../src/sketch')
const loop = require('raf-loop');
const scale = require('./scale');

const engine = loop(function (dt) { sketch.draw() }).start()
const browserEnv = env(engine);
const { context, canvas } = browserEnv.createContext(true)

const globals = {
    _context: context,
    _canvas: canvas,
    _env: browserEnv,
    _scale: scale(context),
}
sketch.setup(globals);
