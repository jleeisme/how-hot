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

// function changeBackground(obj) {
//   document.getElementById("temp").style.color = obj.value;
// }

function randomColorChange(){
  return '#'+(Math.floor(Math.random()*16777216)&0xFFFFFF).toString(16);
}
$('#temp').on('blur keyup', function() {
  $('body').css('background-color', randomColorChange());
});

// $("#temp").on('blur keyup', function(e) {
//   var randomColorChange = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
//     $('body').css('background-color', randomColorChange);
// });
