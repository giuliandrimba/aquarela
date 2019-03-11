const colors = require('colors');
const moment = require("moment");
const sketch = require("../src/sketch");
const loop = require('raf-loop');
const env = require("./server/env")
const scale = require('./scale');
const config = require('../config');

var engine = loop(function(dt) { 
  sketch.draw() 
}).start()

var serverEnv = env(engine);
const { context, canvas } = serverEnv.createContext();

const globals = {
  _context: context,
  _canvas: canvas,
  _env: serverEnv,
  _scale: scale(context),
}

sketch.setup(globals);

console.log("– Artwork started at ".yellow + moment().format("HH:mm:ss").green)
