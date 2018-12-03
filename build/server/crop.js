var fs = require('fs')
var path = require('path')
const { createCanvas, Image } = require('canvas')
var config = require("../../config.json");

var img = new Image()

img.onerror = function (err) {
  throw err
}

img.onload = function () {
  var p = parseInt(config.thumbnail_size) / parseInt(config.width);
  var w = parseInt(config.width) * p
  var h = parseInt(config.height) * p
  var canvas = createCanvas(w, h)
  var ctx = canvas.getContext('2d')

  ctx.drawImage(img, 0, 0, w, h)

  var reg = img.src.match(/\/.*\/(.*).jpg/)
  var name = 'thumbnail.jpg'
  if(reg.length > 1){
    name = reg[1] + "_thumbnail.jpg";
    console.log(reg[1])
  }

  var out = fs.createWriteStream(path.join(path.resolve(__dirname, '..', '..', 'dist'), name))
  var outThumb = fs.createWriteStream(path.join(path.resolve(__dirname, '..', '..', 'dist'), 'thumbnail.jpg'))
  var stream = canvas.createJPEGStream({})

  stream.pipe(out);
  stream.pipe(outThumb);
}


module.exports = function(src) {
  img.src = src;
}