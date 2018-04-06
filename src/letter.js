var DNA = require('./dna')
var alphabet = require('./alphabet')
var Calc = require('@doublepi/calc');
var TweenMax = require('gsap');
var _ = require('underscore');

class Letter {
  constructor(x, y, form, ctx) {
    this.x = x;
    this.y = y + 25;
    this.form = form;
    this.ctx = ctx;
    this.done = false;
    this.CENTER_X = x;
    this.CENTER_Y = y;

    this.points = this.form;
    this.lines = [];
  }

  draw() {
    var total = this.form.length;
    this.ctx.fillStyle = 'black';
    // this.ctx.strokeStyle = 'rgba(0,0,0, 1)';
    // this.ctx.globalCompositeOperation = "hard-light";
    this.ctx.beginPath();
    for (var i = 0; i < total; i+=2) {
      let x = this.x + parseFloat(this.form[i])
      let y = this.y + parseFloat(this.form[i+1])
      this.drawline(this.CENTER_X, this.CENTER_Y, x, y)
      // this.drawRect(x, y, 10);
    }
    // this.ctx.fill();
    this.ctx.stroke();
  }

  drawRect(x, y, r) {
    this.ctx.rect(x, y, r, r);
    this.ctx.rect(x + 5, y + 5, r, r);
  }

  drawline(fromX, fromY, x, y) {
    this.ctx.moveTo(fromX, fromY);
    this.ctx.lineTo(x,y);
  }
}

module.exports = Letter;
