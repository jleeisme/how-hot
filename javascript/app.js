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
// Probably could eventually maybe possibly create a function that can call upon the colours when a specific number range has been entered
// Refactor can happen when it all functions like roses
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

    if((40 < celVal) || 104 < fahrVal) {
      $('body').css('background', redHot());
      turnWhite();
    }

    // replicates the css body background colour gradient...how many commas should be inserted in that?
    // Tempted to make all of the colours gradients cause they're much prettier. Pretty is everything
    if((celVal == null) || (celVal == "") || (isNaN(celVal))) {
      $('body')
        .css({'background': 'linear-gradient(250deg, #00ffff, #ff4d4f)'})
        .css({'background-size': '200% 200%'})
        .css({'animation': 'background 10s linear infinite'});
      turnBlack();
    }
  });
});