const env = require('./browser/env');
const sketch = require('../src/sketch')
const loop = require('raf-loop');
const scale = require('./scale');

const engine = loop(function(dt) { sketch.draw() }).start()
const browserEnv = env(engine);
const ctx = browserEnv.createContext(true)
sketch.setup(ctx, browserEnv, scale(ctx));
