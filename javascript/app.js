function getRandomColor() {
  color = "hsl(" + Math.random() * 360 + ", 100%, 85%)";
  return color;
}

$('#temp-celsius, #temp-fahrenheit').on('blur keyup', function() {
  $('body').css('background-color', getRandomColor());
});

var celsius = document.getElementById('temp-celsius'),
    fahrenheit = document.getElementById('temp-fahrenheit');

var noTemp = function(){
  noCel = celsius.value = "";
  noFahr = fahrenheit.value = "";
}

celsius.onkeyup = function() {
  if(celsius.value != "") {
    fahrenheit.value = Math.round(this.value * 9 / 5 + 32); 
  }
  else {
    noTemp();
  }

  if(isNaN(celsius.value)){
    noTemp();
  }
}
    
fahrenheit.onkeyup = function() {
  if(fahrenheit.value != "") {
    celsius.value = Math.round((this.value - 32) * 5 / 9);
  }
  else { 
    noTemp();
  }

  if(isNaN(fahrenheit.value)){
    noTemp();
  }
}


// color stuff
// setInterval(function() {
//     var element = document.getElementById("box");
//     //generate random red, green and blue intensity
//     var r = getRandomInt(0, 255);
//     var g = getRandomInt(0, 255);
//     var b = getRandomInt(0, 255);
    
//     element.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
//     document.getElementById("colorvalue").innerHTML = r + " " + g + " " + b;
// }, 1500);

// *******************

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

// *******************


// document.getElementById('celsius').onkeyup = updateFahrenheit;

// document.getElementById('fahrenheit').onkeyup = 
//   updateCelsius;

// document.getElementById('celsius').value = 0;

// // initial value on page load
// updateFahrenheit();

// function updateFahrenheit() {
//   var c = document.getElementById('celsius').value;
//   var f;
//   if ( (c == null) || (c == "") || (isNaN(c) ) )
//   {
//     f = "";
//   }
//   else
//   {
//     f = celsiusToFahrenheit(c);
//   }
//   document.getElementById('fahrenheit').value = f;
// }

// function updateCelsius() {
//   var f = document.getElementById('fahrenheit').value;
//   var c;
//   if ( (f == null) || (f == "") || (isNaN(f) ) )
//   {
//     c = "";
//   }
//   else
//   {
//     c = fahrenheitToCelsius(f);
//   }
//   document.getElementById('celsius').value = c;
// }

// function myround(x) {
//   return Math.round(10 * x) / 10;
// }

// function celsiusToFahrenheit(c) {
//   var answer = c * 9 / 5 + 32;
//   return myround(answer);
// }

// function fahrenheitToCelsius(f) {
//   var answer = (f - 32) * 5 / 9;
//   return myround(answer);
// }