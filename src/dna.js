exports.generate = function(letter, maxWidth, maxHeight) {
  var points = [];
  var totalPoints = Math.round(letter.length / 2)
  var count = 0;
  for(var i = 0; i < totalPoints; i++) {
    let x = parseFloat(parseFloat(letter[count]) + randomRange()).toFixed(2)
    let y = parseFloat(parseFloat(letter[count + 1]) + randomRange()).toFixed(2)
    let p = {x,y}
    points.push(p)
    count = i * 2;
  }

  return points;
}

function randomRange() {
  var num = Math.floor(Math.random() * 500) + 1; // this will get a number between 1 and 99;
  num *= Math.floor(Math.random() * 2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
  return num;
}