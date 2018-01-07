var alphabet = require('./alphabet')

var ctx = undefined;
var env = undefined;
var imageCanvas = undefined;
var image = undefined;
var texts = []
var NUM_COLS = 20;
var COL_WIDTH = 0;
var NUM_ROWS = 20;
var COL_HEIGHT = 0;

var START_X = 0;
var START_Y = 0;

exports.setup = function(_ctx, _env){
  ctx = _ctx;
  env = _env;

  COL_WIDTH = 15
  COL_HEIGHT =15;

  NUM_COLS = Math.ceil(ctx.canvas.width / COL_WIDTH)
  NUM_ROWS = Math.ceil(ctx.canvas.height / COL_HEIGHT);

  START_X = ctx.canvas.width / 2
  START_Y = ctx.canvas.height - 50
  background("#fff");
  drawLetter()
}

exports.draw = function() {

}

function drawLetter() {
  var total = alphabet.A.length;
  ctx.beginPath();
  ctx.moveTo(START_X + parseFloat(alphabet.A[0]), START_Y + parseFloat(alphabet.A[1]));
  // ctx.lineTo(START_X + parseFloat(alphabet.A[0]), START_Y + parseFloat(alphabet.A[1]));
  // ctx.lineTo(START_X + parseFloat(alphabet.A[2]), START_Y + parseFloat(alphabet.A[3]));
  // ctx.lineTo(START_X + parseFloat(alphabet.A[4]), START_Y + parseFloat(alphabet.A[5]));
  for(var i = 0; i < total; i+= 2) {
    ctx.lineTo(START_X + parseFloat(alphabet.A[i]),START_Y + parseFloat(alphabet.A[i + 1]));
  }
  ctx.stroke();
}

function background(color){
  ctx.fillStyle = color;
  ctx.fillRect(0,0, ctx.canvas.width, ctx.canvas.height);
}
