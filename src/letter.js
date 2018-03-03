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
    this.MAX_FITNESS = undefined;
    this.fitnessScore = undefined;
    this.done = false;
    this.MAX = window.innerWidth / 2
    this.numDone = 0;
    this.CENTER_X = this.ctx.canvas.width / 2;
    this.CENTER_Y = this.ctx.canvas.height / 2;

    this.done = false;
    this.dna = DNA.generate(this.form, ctx.canvas.width, ctx.canvas.height);
    this.points = this.dna;
    this.lines = [];
    this.MAX_FITNESS = Calc.dist(0,0,70,140) * 5;
    this.fitnessScore = 0
  }

  update() {
    for(var i = 0; i < this.points.length; i++) {
      var p = this.points[i];
      TweenMax.to(p, 0.15, {x:this.dna[i].x, y:this.dna[i].y, override:true})
    }
  }

  reset() {
    this.dna = DNA.generate()
    this.points = this.dna;
    this.lines = [];
    this.circles = [];
    this.MAX_FITNESS = Calc.dist(0,0,70,140) * 5;
    this.done = false;
  }

  draw() {
    var total = this.dna.length;
    this.ctx.fillStyle = 'white';
    this.ctx.strokeStyle = 'rgba(0,0,0, 0.4)';
    this.ctx.globalCompositeOperation = "hard-light";
    this.ctx.beginPath();
    for (var i = 0; i < total; i++) {
      let x = this.x + parseFloat(this.dna[i].x);
      let y = this.y + parseFloat(this.dna[i].y);
      let r = this.dna[i].r;
      this.drawline(this.CENTER_X, this.CENTER_Y, x, y)
      // this.drawRect(x, y, r);
      // ctx.stroke();
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

  evolve() {
    let dist = undefined;
    let count = 0;
    if (this.numDone > this.dna.length * 0.8) {
      return false;
    }
    this.numDone = 0
    
    this.dna = this.dna.map((item, i)=>{
      dist = Calc.dist(this.form[count], this.form[count + 1], item.x, item.y);
      if (dist > 2) {
        item.x = Math.min(this.MAX,parseFloat(item.x) + randomRange(dist))
        item.y = Math.min(this.MAX,parseFloat(item.y) + randomRange(dist))
        item.r = dist / 5
      } else {
        item.r = 50
        this.numDone++;
      }
      count = i * 2;
      return item;
    })
    return true;
  }
}

function randomRange(amount) {
  var num = Math.floor(Math.random() * amount) + 1; // this will get a number between 1 and 99;
  num *= Math.floor(Math.random() * 2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
  return num;
}

module.exports = Letter;
