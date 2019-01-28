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
exports.setup = function({ _two, _Two, _canvas, _context, _env, _scale }){
  env = _env;
  scale = _scale;
  two = _two;
  Two = _Two;
  canvas = _canvas;
  context = _context;
  canvasWidth = two.renderer.domElement.width;
  canvasHeight = two.renderer.domElement.height;
  // setTimeout(() => {
  //   env.save()
  // }, 1000)
}

exports.draw = function() {
  // two.update();
}