// allows for randomizing in the colour functions
// not randomizing colours atm, but leaving it in as I can always change my mind
function randomVal(min, max) {
  return Math.floor(Math.random() * (max - min) + 1) + min;
}

// red 359, 100, 65...
function getRandomColourRed() {
  for (var i = 0; i < 5; i++) {
    var hsl = 'hsl(' + randomVal(359, 359) + ', ' + randomVal(100, 100) + '%,  ' + randomVal(65, 65) + '%)';
  }
  return hsl;
}

// orange 27, 97, 61
function getRandomColourOrange() {
  for (var i = 0; i < 5; i++) {
    var hsl = 'hsl(' + randomVal(27, 27) + ', ' + randomVal(97, 97) + '%,  ' + randomVal(61, 61) + '%)';
  }
  return hsl;
}

// yellow 50, 94, 58
function getRandomColourYellow() {
  for (var i = 0; i < 5; i++) {
    var hsl = 'hsl(' + randomVal(50, 50) + ', ' + randomVal(94, 94) + '%,  ' + randomVal(58, 58) + '%)';
  }
  return hsl;
}

// green 93, 55, 64
function getRandomColourGreen() {
  for (var i = 0; i < 5; i++) {
    var hsl = 'hsl(' + randomVal(93, 93) + ', ' + randomVal(55, 55) + '%,  ' + randomVal(64, 64) + '%)';
  }
  return hsl;
}

// cyan 185, 61, 64
function getRandomColourCyan() {
  for (var i = 0; i < 5; i++) {
    var hsl = 'hsl(' + randomVal(185, 185) + ', ' + randomVal(61, 61) + '%,  ' + randomVal(64, 64) + '%)';
  }
  return hsl;
}

// blue 215, 51, 52
function getRandomColourBlue() {
  for (var i = 0; i < 5; i++) {
    var hsl = 'hsl(' + randomVal(215, 215) + ', ' + randomVal(51, 51) + '%,  ' + randomVal(52, 52) + '%)';
  }
  return hsl;
}

// cold blue 210, 90, 32...215, 87, 39
function coldBlue() {
  for (var i = 0; i < 5; i++) {
    var hsl = 'hsl(' + randomVal(215, 215) + ', ' + randomVal(87, 87) + '%,  ' + randomVal(39, 39) + '%';
  }
  return hsl;
}

// red hot 0, 100, 40...3, 76, 46
function redHot() {
  for (var i = 0; i < 5; i++) {
    var hsl = 'hsl(' + randomVal(3, 3) + ', ' + randomVal(76, 76) + '%,  ' + randomVal(46, 46) + '%';
  }
  return hsl;
}

// white
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
  if((celVal == null) || (celVal == "") || (isNaN(celVal))) {
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

// change text & border white on dark backgrounds
var turnWhite = function() {
  $('*').css('color', white());
  $('input').css('border-color', white());
}

// change text & border black on dark backgrounds
var turnBlack = function() {
  $('*').css('color', '#000');
  $('input').css('border-color', '#000');
}

// jquery to change the colour of the background on keyups
// Probably could eventually create a function that can call upon the colours when a specific number range has been entered
// Refactor can happen when it all functions
$(document).ready(function() {
  $('#temp-celsius, #temp-fahrenheit').on('blur keyup', function() {
    var celVal = celsius.value,
        fahrVal = fahrenheit.value;

    if((-100 <= celVal && celVal <= -20) || -148 <= fahrVal && fahrVal <= -4) {
      $('body').css('background', coldBlue());
      turnWhite();
    }

    if((-20 < celVal && celVal <= -10) || -4 < fahrVal && fahrVal <= 14) {
      $('body').css('background', getRandomColourBlue());
      turnWhite();  
    }

    if((-10 < celVal && celVal <= 0) || 14 < fahrVal && fahrVal <= 32) {
      $('body').css('background', getRandomColourCyan()); 
    }

    if((0 < celVal && celVal <= 10) || 32 < fahrVal && fahrVal <= 50) {
      $('body').css('background', getRandomColourGreen());
    }

    if((10 < celVal && celVal <= 20) || 50 < fahrVal && fahrVal <= 68) {
      $('body').css('background', getRandomColourYellow());
    }

    if((20 < celVal && celVal <= 30) || 68 < fahrVal && fahrVal <= 86) {
      $('body').css('background', getRandomColourOrange());
      turnWhite();
    }

    if((30 < celVal && celVal <= 40) || 86 < fahrVal && fahrVal <= 104) {
      $('body').css('background', getRandomColourRed());
      turnWhite();
    }

    if((40 < celVal && celVal <= 100) || 104 < fahrVal && fahrVal <= 212) {
      $('body').css('background', redHot());
      turnWhite();
    }

    if((celVal == null) || (celVal == "") || (isNaN(celVal))) {
      $('body')
        .css({'background': 'linear-gradient(225deg, #00ffff, #ff4d4f)'})
        .css({'background-size': '300% 300%'})
        .css({'animation': 'background 10s linear infinite'});
      turnBlack();
    }
  });
});