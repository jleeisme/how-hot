// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// setInterval(function() {
//     var element = document.getElementById("box");
//     //generate random red, green and blue intensity
//     var r = getRandomInt(0, 255);
//     var g = getRandomInt(0, 255);
//     var b = getRandomInt(0, 255);
    
//     element.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
//     document.getElementById("colorvalue").innerHTML = r + " " + g + " " + b;
// }, 1500);

// function randomColorChange(){
//   return '#'+(Math.floor(Math.random()*16777216)&0xFFFFFF).toString(16);
// }
function getRandomColor() {
  color = "hsl(" + Math.random() * 360 + ", 100%, 80%)";
  return color;
}

$('#temp-celsius').on('blur keyup', function() {
  $('body').css('background-color', getRandomColor());
});

var celsius = document.getElementById('temp-celsius'),
  fahrenheit = document.getElementById('temp-fahrenheit');
    
celsius.onkeyup = function() {
  fahrenheit.value = Math.round(this.value * 9/5 + 32); 
}
    
fahrenheit.onkeyup = function() {
  celsius.value = Math.round((this.value - 32) * 5/9);
}

// var c = document.getElementById('temp-celsius').onkeyup = function(){
//   convertTemp()
// },
//     f = document.getElementById('temp-fahrenheit').onkeyup = function(){
//       convertTemp();
//     };

// function convertTemp() {
 
//  if(c.value != '') {
//   f.value = Math.round(c.value * 9 / 5 + 32);
//   c.value = '';
//  } else  {
//   c.value = Math.round((f.value - 32) * 5 / 9);
//   f.value = '';
//  }
// }

