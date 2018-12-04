var config = require("../../config.json")

module.exports = function(engine) {
  var env = {};
  var canvas = undefined;
  var context = undefined;
  var PRINT_WIDTH = undefined;
  var PRINT_HEIGHT = undefined;
  var PADDING = 30;

  
  env.type = {browser:true}
  
  env.done = function(){
    engine.stop();
    env.save()
  }
  
  env.Image = Image;
  
  env.loadImage = function(src, cb){
    var img = new Image;
    img.onload = function(){
      cb(img);
    }
    img.src = src;
  }
  
  env.save = function(){
    var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    var a = document.createElement('a');
    a.href = image;
    var name = config.name + ".png";
    a.download = name.replace(" ","_");
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  
  env.createContext = function(addToBody){
    canvas = document.createElement("canvas");
    context = canvas.getContext('2d');
    PRINT_WIDTH = config.width;
    PRINT_HEIGHT = config.height;
    env.PRINT_WIDTH = PRINT_WIDTH;
    env.PRINT_HEIGHT = PRINT_HEIGHT;
    env.resize(canvas);
    if(addToBody) {
      document.body.appendChild(canvas);
      document.title = config.name;
    }
    return { context, canvas };
  }
  
  env.resize = function(canvas){

    if(PRINT_WIDTH > PRINT_HEIGHT) {
      var percent = PRINT_HEIGHT / PRINT_WIDTH
      var w = window.innerWidth - PADDING * 2
      canvas.width = w;
      canvas.height = w * percent;
    } else if (PRINT_HEIGHT > PRINT_WIDTH){
      var percent = PRINT_WIDTH / PRINT_HEIGHT
      var w = window.innerHeight - PADDING * 2
      canvas.width = w * percent;
      canvas.height = w;
    } else {
      var w = window.innerHeight - PADDING * 2
      canvas.width = w;
      canvas.height = w;
    }
  }

  return env;
}
