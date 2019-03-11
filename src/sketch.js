let canvas = undefined;
let context;
let env = undefined;
let scale = undefined;
let draw = undefined;
let two = undefined;
let Two = undefined;
let background = undefined;
let circle = undefined;
let canvasWidth;
let canvasHeight;
exports.setup = function({ _canvas, _context, _env, _scale }){
  env = _env;
  scale = _scale;
  canvas = _canvas;
  context = _context;
  canvasWidth = _canvas.width;
  canvasHeight = _canvas.height;
  context.fillStyle = '#FFFFFF'
  context.rect(0, 0, canvasWidth, canvasHeight);
  context.fill();
  env.done();
}

exports.draw = function() {
  
}