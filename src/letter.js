var DNA = require('./dna')
var alphabet = require('./alphabet')
var Calc = require('@doublepi/calc');
var TweenMax = require('gsap');
var _ = require('underscore');

function Letter(letter, offset, y, ctx){
  this.offset = offset;
  this.y = y;
  this.ctx = ctx;
  this.done = false;

  this.draw = function() {
    this.ctx.fillStyle = 'black';
    this.ctx.font = "700px Helvetica";
    var textWidth = ctx.measureText(letter).width
    var center = (this.ctx.canvas.width / 2) - (textWidth / 2);
    this.ctx.fillText(letter, center + this.offset, this.y);
    this.ctx.stroke();
  }
}
module.exports = Letter;
