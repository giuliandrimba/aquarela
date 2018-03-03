var DNA = require('./dna')
var alphabet = require('./alphabet')
var Calc = require('@doublepi/calc');
var TweenMax = require('gsap');
var _ = require('underscore');

class Letter {
  constructor(x, y, form, ctx) {
    this.x = x;
    this.y = y;
    this.form = form;
    this.ctx = ctx;
    this.MAX_FITNESS = undefined;
    this.fitnessScore = undefined;
    this.done = false;
    this.MAX = window.innerWidth / 2
    this.numDone = 0;

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
    this.ctx.fillStyle = 'red';
    this.ctx.beginPath();
    // this.ctx.moveTo(this.x + parseFloat(this.dna[i].x), this.y + parseFloat(this.dna[i].y));
    for (var i = 0; i < total; i++) {
      this.ctx.rect(this.x + parseFloat(this.dna[i].x), this.y + parseFloat(this.dna[i].y), this.dna[i].r, this.dna[i].r);
      this.ctx.rect(this.x + parseFloat(this.dna[i].x + 5), this.y + parseFloat(this.dna[i].y + 5), this.dna[i].r, this.dna[i].r);
      // this.ctx.rect(this.x + parseFloat(this.dna[i].x - 5), this.y + parseFloat(this.dna[i].y - 5), this.dna[i].r, this.dna[i].r);
      // this.ctx.lineTo(this.x + parseFloat(this.dna[i].x), this.y + parseFloat(this.dna[i].y));
      // this.ctx.arc(this.x + parseFloat(this.dna[i].x), this.y + parseFloat(this.dna[i].y), this.dna[i].r / 10, 0, 2 * Math.PI);
      // ctx.stroke();
    }
    // this.ctx.fill();
    this.ctx.stroke();
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
      if (dist > 15) {
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
