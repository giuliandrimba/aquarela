var ctx = undefined;
var env = undefined;

exports.setup = function(_ctx, _env){
  ctx = _ctx;
  env = _env;

  background("#fff");
  placeholder();
  setTimeout(function(){
    env.done();
  }, 1000)
}

exports.draw = function() {

}

function placeholder() {
  ctx.fillStyle = "#000";
  var fontSize = ctx.canvas.width / 2.5;
  ctx.font = fontSize + "px serif";
  var textMeasure = ctx.measureText("Aquarela");
  var marginLeft = ctx.canvas.width * 0.01;
  ctx.fillText("Aquarela", marginLeft, ctx.canvas.height / 0.97);

  var radius = ctx.canvas.width / 30;
  ctx.beginPath();
  ctx.arc(marginLeft + radius * 2,marginLeft + radius * 2,radius,0,Math.PI*2,true); // Outer circle
  ctx.fill()
}

function background(color){
  ctx.fillStyle = color;
  ctx.fillRect(0,0, ctx.canvas.width, ctx.canvas.height);
}