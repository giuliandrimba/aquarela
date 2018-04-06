var DNA = require('./dna')
var alphabet = require('./alphabet')
var Calc = require('@doublepi/calc');
var TweenMax = require('gsap');
var _ = require('underscore');

function Letter(x, y, form, ctx){
  this.x = x;
  this.y = y + 25;
  this.form = form;
  this.ctx = ctx;
  this.done = false;
  this.CENTER_X = x;
  this.CENTER_Y = y;

  this.points = this.form;
  this.lines = [];

  this.draw = function() {
    var total = this.form.length;
    this.ctx.fillStyle = 'black';
    // this.ctx.strokeStyle = 'rgba(0,0,0, 1)';
    // this.ctx.globalCompositeOperation = "hard-light";
    this.ctx.beginPath();
    for (var i = 0; i < total; i+=2) {
      var x = this.x + parseFloat(this.form[i])
      var y = this.y + parseFloat(this.form[i+1])
      this.drawline(this.CENTER_X, this.CENTER_Y, x, y)
      // this.drawRect(x, y, 10);
    }
    // this.ctx.fill();
    this.ctx.stroke();
  }

  this.drawRect = function(x, y, r) {
    this.ctx.rect(x, y, r, r);
    this.ctx.rect(x + 5, y + 5, r, r);
  }

  this.drawline = function(fromX, fromY, x, y) {
    this.ctx.moveTo(fromX, fromY);
    this.ctx.lineTo(x,y);
  }
}

module.exports = Letter;
