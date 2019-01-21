const colors = require('colors');
const moment = require("moment");
const sketch = require("../src/sketch");
const loop = require('raf-loop');
const env = require("./server/env")
const scale = require('./scale');
const Two = require('two.js')
const config = require('../config');
let two = undefined;

var engine = loop(function(dt) { 
  sketch.draw() 
}).start()

var serverEnv = env(engine);
const { context, canvas } = serverEnv.createContext();
Two.Utils.shim(canvas, serverEnv.Image);
const tmpDone = serverEnv.done;

serverEnv.done = () => {
  two.render()
  tmpDone()
}

two = new Two({
  width: config.width,
  height: config.height,
  domElement: canvas
})

const globals = {
  _two: two,
  _Two: Two,
  _context: context,
  _canvas: canvas,
  _env: serverEnv,
  _scale: scale(context),
}

sketch.setup(globals);

console.log("– Artwork started at ".yellow + moment().format("HH:mm:ss").green)
