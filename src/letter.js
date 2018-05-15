var DNA = require('./dna')
var alphabet = require('./alphabet')
var Calc = require('@doublepi/calc');
var TweenMax = require('gsap');
var _ = require('underscore');

function Letter(x, y, ctx){
  this.x = x;
  this.y = y + 25;
  this.ctx = ctx;
  this.done = false;
  this.CENTER_X = x;
  this.CENTER_Y = y;

  this.draw = function() {
    this.ctx.fillStyle = 'black';
    this.ctx.font = "1000px Helvetica";
    this.ctx.fillText("A", this.x, this.y);
    this.ctx.stroke();
  }
}

module.exports = Letter;
