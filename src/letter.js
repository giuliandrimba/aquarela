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
    this.dna = DNA.generate(alphabet.A, ctx.canvas.width, ctx.canvas.height);
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
    var grd = this.ctx.createLinearGradient(0, 0, this.MAX, this.MAX);
    grd.addColorStop(0, "black");
    grd.addColorStop(1, "white");
    var total = this.dna.length;
    this.ctx.fillStyle = grd;
    this.ctx.beginPath();
    this.ctx.moveTo(this.x + parseFloat(this.dna[0].x), this.y + parseFloat(this.dna[0].y));
    for (var i = 0; i < total; i += 2) {
      this.ctx.lineTo(this.x + parseFloat(this.dna[i].x), this.y + parseFloat(this.dna[i].y));
    }
    this.ctx.stroke();
    // this.ctx.fill();
  }

  fitness() {
    var count = 0;
    var dist = 0;
    var vel = 0;

    for(var i = 0; i < this.dna.length; i++) {
      var p = this.dna[i];
      dist = Calc.dist(this.form[i].x, this.form[i].y, p.x, p.y);
      vel = 15 - (dist / 10);

      if(dist < 30)
        vel *= 1.5
      if(dist < 20)
        vel *= 2
      if(dist < 10)
        vel *= 5
      if(dist < 5)
        vel *= 8
      if(dist > 50)
        vel *= 0.1

      count += vel
    }
    this.fitnessScore = count
    return this.fitnessScore
  }

  evolve() {
    let dist = undefined;
    let count = 0;
    if (this.numDone > this.dna.length * 0.9) {
      return false;
    }
    this.numDone = 0
    
    this.dna = this.dna.map((item, i)=>{
      dist = Calc.dist(this.form[count], this.form[count + 1], item.x, item.y);
      if (dist > 6) {
        item.x = Math.min(this.MAX,parseFloat(item.x) + randomRange(dist))
        item.y = Math.min(this.MAX,parseFloat(item.y) + randomRange(dist))
      } else {
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
