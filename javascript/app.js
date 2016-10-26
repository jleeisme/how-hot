// jquery to change the colour of the background on keyups
$('#temp-celsius, #temp-fahrenheit').on('blur keyup', function() {
  var celVal = celsius.value,
      fahrVal = fahrenheit.value;

  if((-100 <= celVal && celVal <= -20) || -148 <= fahrVal && fahrVal <= -4) {
    $('body').css('background-color', coldBlue());
  }
  if((-20 < celVal && celVal <= -10) || -4 < fahrVal && fahrVal <= 14) {
    $('body').css('background-color', getRandomColourBlue());
  }
  if((-10 < celVal && celVal <= 0) || 14 < fahrVal && fahrVal <= 32) {
    $('body').css('background-color', getRandomColourCyan()); 
  }
  if((0 < celVal && celVal <= 10) || 32 < fahrVal && fahrVal <= 50) {
    $('body').css('background-color', getRandomColourGreen());
  }
  if((10 < celVal && celVal <= 20) || 50 < fahrVal && fahrVal <= 68) {
    $('body').css('background-color', getRandomColourYellow());
  }
  if((20 < celVal && celVal <= 30) || 68 < fahrVal && fahrVal <= 86) {
    $('body').css('background-color', getRandomColourOrange());
  }
  if((30 < celVal && celVal <= 40) || 86 < fahrVal && fahrVal <= 104) {
    $('body').css('background-color', getRandomColourRed());
  }
  if((40 < celVal && celVal <= 100) || 104 < fahrVal && fahrVal <= 212) {
    $('body').css('background-color', redHot());
  }
  else {
    $('body').css('background-color', white());
  }
});

// allows for randomizing in the colour functions
function randomVal(min, max) {
  return Math.floor(Math.random() * (max - min) + 1) + min;
}

// red
function getRandomColourRed() {
  for (var i = 0; i < 5; i++) {
    var hsl = 'hsl(' + randomVal(10, 11) + ', ' + randomVal(80, 85) + '%,  ' + randomVal(60, 65) + '%)';
  }
  return hsl;
}

// orange
function getRandomColourOrange() {
  for (var i = 0; i < 5; i++) {
    var hsl = 'hsl(' + randomVal(20, 21) + ', ' + randomVal(80, 85) + '%,  ' + randomVal(60, 65) + '%)';
  }
  return hsl;
}

// yellow
function getRandomColourYellow() {
  for (var i = 0; i < 5; i++) {
    var hsl = 'hsl(' + randomVal(50, 51) + ', ' + randomVal(80, 85) + '%,  ' + randomVal(60, 65) + '%)';
  }
  return hsl;
}

// green
function getRandomColourGreen() {
  for (var i = 0; i < 5; i++) {
    var hsl = 'hsl(' + randomVal(150, 151) + ', ' + randomVal(80, 85) + '%,  ' + randomVal(60, 65) + '%)';
  }
  return hsl;
}

// cyan
function getRandomColourCyan() {
  for (var i = 0; i < 5; i++) {
    var hsl = 'hsl(' + randomVal(190, 191) + ', ' + randomVal(80, 85) + '%,  ' + randomVal(60, 65) + '%)';
  }
  return hsl;
}

// blue
function getRandomColourBlue() {
  for (var i = 0; i < 5; i++) {
    var hsl = 'hsl(' + randomVal(235, 236) + ', ' + randomVal(80, 85) + '%,  ' + randomVal(60, 65) + '%)';
  }
  return hsl;
}

// cold blue 210, 90, 32
function coldBlue() {
  for (var i = 0; i < 5; i++) {
    var hsl = 'hsl(' + randomVal(210, 210) + ', ' + randomVal(90, 91) + '%,  ' + randomVal(32, 33) + '%';
  }
  return hsl;
}

// red hot 0, 100, 40
function redHot() {
  for (var i = 0; i < 5; i++) {
    var hsl = 'hsl(' + randomVal(0, 0) + ', ' + randomVal(99, 100) + '%,  ' + randomVal(40, 41) + '%';
  }
  return hsl;
}

// white...leaving it as a function as it can be easily altered if i feel like it
function white() {
  for (var i = 0; i < 5; i++) {
    var hsl = 'hsl(' + randomVal(0, 0) + ', ' + randomVal(0, 0) + '%,  ' + randomVal(100, 100) + '%';
  }
  return hsl;
}

// assign the two forms to a variable
var celsius = document.getElementById('temp-celsius'),
    fahrenheit = document.getElementById('temp-fahrenheit');

// calculation to make celsius to fahrenheit as well as clearing the forms when blank
celsius.onkeyup = function() {
  var celVal = document.getElementById('temp-celsius').value;
  if((celVal == null) || (celVal == "") || (isNaN(celVal))){
    fahrenheit.value = "";
  }
  else {
    fahrenheit.value = Math.round(this.value * 9 / 5 + 32);
  }
}

// calculation to make fahrenheit to celsius as well as clearing the forms when blank
fahrenheit.onkeyup = function() {
  var fahrVal = document.getElementById('temp-fahrenheit').value;
  if((fahrVal == null) || (fahrVal == "") || (isNaN(fahrVal))) {
    celsius.value = "";
  }
  else {
    celsius.value = Math.round((this.value - 32) * 5 / 9);
  }
}


// ********** old form clearing ***********

// var function for blank, or to make blank, forms
// var noTemp = function(){
//   noCel = celsius.value = "";
//   noFahr = fahrenheit.value = "";
// }

// fahrenheit.onkeyup = function() {
//   if(fahrenheit.value != "") {
//     celsius.value = Math.round((this.value - 32) * 5 / 9);
//   }
//   else { 
//     noTemp();
//   }

//   // if(isNaN(fahrenheit.value)){ //clears the forms when non-numbers are entered
//   //   noTemp();
//   // }
// }

// *********** old colour randomizer **********************

// function getRandomColour() {
//   color = "hsl(" + Math.random() * 360 + ", 80%, 85%)";
//   return color;
// }