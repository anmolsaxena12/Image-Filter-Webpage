var image;
var Oimg;


function upload() {
  var fileinput = document.getElementById('finput');
  var canvas = document.getElementById('imgcan');
  image = new SimpleImage(fileinput);
  Oimg = new SimpleImage(image);
  image.drawTo(canvas);
}
function clear(){
   var canvasop = document.getElementById('canop');
    image.drawTo(canvasop);
}

function toGray(){
  for(var px of image.values()){
    avg = (px.getRed()+px.getBlue()+px.getGreen())/3;
    px.setRed(avg);
    px.setBlue(avg);
    px.setGreen(avg);
  }
  var canvasop = document.getElementById('canop');
    image.drawTo(canvasop);
}
function toYellow(){
  for(var px of image.values()){
    var x = px.getRed();
    var y=px.getBlue();
    var z = px.getGreen();
    px.setRed(x+20);
    px.setBlue(y);
    px.setGreen(z+20);
  }
  var canvasop = document.getElementById('canop');
    image.drawTo(canvasop);
}
function toRed(){
  for(var px of image.values()){
    var x = px.getRed();
    var y=px.getBlue();
    var z = px.getGreen();
    px.setRed(x+20);
    px.setBlue(y);
    px.setGreen(z);
  }
  var canvasop = document.getElementById('canop');
    image.drawTo(canvasop);
}
function toBlue(){
  for(var px of image.values()){
    var x = px.getRed();
    var y=px.getBlue();
    var z = px.getGreen();
    px.setRed(x);
    px.setBlue(y+20);
    px.setGreen(z);
  }
  var canvasop = document.getElementById('canop');
    image.drawTo(canvasop);
}
