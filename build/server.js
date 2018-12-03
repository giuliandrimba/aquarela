var colors = require('colors');
var moment = require("moment");
var sketch = require("../src/sketch");
var loop = require('raf-loop');
var env = require("./server/env")
const scale = require('./scale');

var engine = loop(function(dt) { 
  sketch.draw() 
}).start()

var serverEnv = env(engine);
var ctx = serverEnv.createContext();
sketch.setup(ctx, serverEnv, scale(ctx));

console.log("– Artwork started at ".yellow + moment().format("HH:mm:ss").green)
