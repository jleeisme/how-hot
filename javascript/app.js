function randomVal(min, max) {
  return Math.floor(Math.random() * (max - min) + 1) + min;
}

function getRandomColor() {
  for (var i = 0; i < 5; i++) {
    var hsl = 'hsl(' + randomVal(10, 11) + ', ' + randomVal(90, 95) + '%,  ' + randomVal(50, 80) + '%)';
  }
  return hsl;
}

// function getRandomColor() {
//   color = "hsl(" + Math.random() * 360 + ", 80%, 85%)";
//   return color;
// }

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
// var elColors = document.getElementById('colors');
// var genBtn = document.getElementById('generate_btn');
// var colors = '';

// /* generates a value while allowing the customization of the minimum and maximum values*/
// function randomVal(min, max) {
//   return Math.floor(Math.random() * (max - min) + 1) + min;
// }

//  TO CUSTOMIZE 

// In the generate() function below, change the numbers in randomVal(); min to max

// EX to only generate colors from green to blue, change the first set to (120, 240)


// function generate() {
//   for (var i = 0; i < 5; i++) {
//     var hsl = 'hsl(' + randomVal(0, 360) + ', ' + randomVal(30, 95) + '%,  ' + randomVal(30, 80) + '%)';
//     colors += '<div class="\random-container\"><div class="\circle\"  style=\"border-bottom-color: ' + hsl + '\"></div> <p>' + hsl + '</p></div>';
//     elColors.innerHTML = colors;
//   }

//   colors = '';

// }

// generate();

// genBtn.addEventListener('click', generate);

