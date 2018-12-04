let canvas = undefined;
let env = undefined;
let scale = undefined;
let draw = undefined;
let two = undefined;
let Two = undefined;

let background = undefined;
let circle = undefined;
exports.setup = function({ _context, _two, _Two }, _env, _scale){
  env = _env;
  scale = _scale;
  two = _two;
  Two = _Two;
  ctx = _context;
  background = two.makeRectangle(ctx.canvas.width / 2 , ctx.canvas.height / 2, ctx.canvas.width, ctx.canvas.height);
  background.fill = '#000';
  background.stroke = 'none'
  circle = two.makeCircle(ctx.canvas.width / 2 , ctx.canvas.height / 2, scale(100));
  circle.fill = '#FFFFFF'
  circle.stroke = 'none';
  setTimeout(() => {
    env.done()
  }, 1000)
}

exports.draw = function() {
  two.update();
}