// jquery to change the colour of the background on keyups
$('#temp-celsius, #temp-fahrenheit').on('blur keyup', function() {
  if(celsius.value)
  $('body').css('background-color', getRandomColour());
});

// allows for randomizing in the colour functions
function randomVal(min, max) {
  return Math.floor(Math.random() * (max - min) + 1) + min;
}

// red
function getRandomColour() {
  for (var i = 0; i < 5; i++) {
    var hsl = 'hsl(' + randomVal(10, 11) + ', ' + randomVal(80, 85) + '%,  ' + randomVal(60, 65) + '%)';
  }
  return hsl;
}

// orange
function getRandomColour() {
  for (var i = 0; i < 5; i++) {
    var hsl = 'hsl(' + randomVal(20, 21) + ', ' + randomVal(80, 85) + '%,  ' + randomVal(60, 65) + '%)';
  }
  return hsl;
}

// yellow
function getRandomColour() {
  for (var i = 0; i < 5; i++) {
    var hsl = 'hsl(' + randomVal(50, 51) + ', ' + randomVal(80, 85) + '%,  ' + randomVal(60, 65) + '%)';
  }
  return hsl;
}

// green
function getRandomColour() {
  for (var i = 0; i < 5; i++) {
    var hsl = 'hsl(' + randomVal(150, 151) + ', ' + randomVal(80, 85) + '%,  ' + randomVal(60, 65) + '%)';
  }
  return hsl;
}

// cyan
function getRandomColour() {
  for (var i = 0; i < 5; i++) {
    var hsl = 'hsl(' + randomVal(190, 191) + ', ' + randomVal(80, 85) + '%,  ' + randomVal(60, 65) + '%)';
  }
  return hsl;
}

// blue
function getRandomColour() {
  for (var i = 0; i < 5; i++) {
    var hsl = 'hsl(' + randomVal(235, 236) + ', ' + randomVal(80, 85) + '%,  ' + randomVal(60, 65) + '%)';
  }
  return hsl;
}

// assign the two forms to a variable
var celsius = document.getElementById('temp-celsius'),
    fahrenheit = document.getElementById('temp-fahrenheit'),
    celVal = celsius.value,
    fahrVal = fahrenheit.value;

// var function for blank, or to make blank, forms
var noTemp = function(){
  noCel = celsius.value = "";
  noFahr = fahrenheit.value = "";
}

var keys = function() {
  if((celVal == null, fahrVal == null) || (celVal == "", fahrVal == "") || (isNan(celVal, fahrVal)));
  noCel = celsius.value = "";
  noFahr = fahrenheit.value = "";
}
// calculation to make celsius to fahrenheit as well as clearing the forms when blank
celsius.onkeyup = function() {
  if(celsius.value != "") {
    fahrenheit.value = Math.round(this.value * 9 / 5 + 32); 
  }
  else {
    keys();
  }

  // if(isNaN(celsius.value)){ //clears the forms when non-numbers are entered
  //   noTemp();
  // }
}

// calculation to make fahrenheit to celsius as well as clearing the forms when blank
fahrenheit.onkeyup = function() {
  if(fahrenheit.value != "") {
    celsius.value = Math.round((this.value - 32) * 5 / 9);
  }
  else { 
    keys();
  }

  // if(isNaN(fahrenheit.value)){ //clears the forms when non-numbers are entered
  //   noTemp();
  // }
}

// *********** old colour randomizer **********************

// function getRandomColour() {
//   color = "hsl(" + Math.random() * 360 + ", 80%, 85%)";
//   return color;
// }