let canvas = undefined;
let env = undefined;
let scale = undefined;
let draw = undefined;
let two = undefined;
let Two = undefined;
let background = undefined;
let circle = undefined;
let canvasWidth;
let canvasHeight;
exports.setup = function({ _two, _Two, _env, _scale }){
  env = _env;
  scale = _scale;
  two = _two;
  Two = _Two;
  canvasWidth = two.renderer.domElement.width;
  canvasHeight = two.renderer.domElement.height;
  background = two.makeRectangle(canvasWidth / 2, canvasHeight / 2, canvasWidth, canvasHeight);
  background.fill = '#000';
  background.stroke = 'none'
  circle = two.makeCircle(canvasWidth / 2, canvasHeight / 2, scale(100));
  circle.fill = '#FFFFFF'
  circle.stroke = 'none';
  // setTimeout(() => {
  //   env.save()
  // }, 1000)
}

exports.draw = function() {
  two.update();
}