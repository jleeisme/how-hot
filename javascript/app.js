$(function() {
// assign the two forms to a variable
  const celsius = document.getElementById('temp-celsius'),
        fahrenheit = document.getElementById('temp-fahrenheit');

  // calculation to make celsius to fahrenheit as well as clearing the forms when blank
  celsius.onkeyup = function() { // arrow functions don't work on event handlers such as here
    // where 'this' refers to the window, the whole document, and not the element
    const celVal = document.getElementById('temp-celsius').value;

    if((celVal == null) || (celVal == "") || (isNaN(celVal))) {
      fahrenheit.value = "";
    } else {
      fahrenheit.value = Math.round(this.value * 9 / 5 + 32);
    }
  }

  // calculation to make fahrenheit to celsius as well as clearing the forms when blank
  fahrenheit.onkeyup = function() {
    const fahrVal = document.getElementById('temp-fahrenheit').value;

    if((fahrVal == null) || (fahrVal == "") || (isNaN(fahrVal))) {
      celsius.value = "";
    } else {
      celsius.value = Math.round((this.value - 32) * 5 / 9);
    }
  }

  if($(window).width() > 769){
    // change text & border white on dark backgrounds
    let turnWhite = () => {
      $('*').css('color', white());
      $('input').css('border-color', white());
    }

    // change text & border black on light backgrounds
    let turnBlack = () => {
      $('*').css('color', '#000');
      $('input').css('border-color', '#000');
    }

    // change the colour of the background on keyups
    // Probably could eventually maybe possibly create a function that can call upon the colours when a specific number range has been entered
    // Refactor can happen when it all functions like roses
    $('#temp-celsius, #temp-fahrenheit').on('input change keyup focus', e => {
      
      const celVal = celsius.value,
            fahrVal = fahrenheit.value;

      if((celVal < -20) || fahrVal < -4) {
        $('body').css('background', coldBlue());
        turnWhite();
      }

      if((-20 <= celVal && celVal <= -10) || -4 <= fahrVal && fahrVal <= 14) {
        $('body').css('background', getBlue());
        turnWhite();  
      }

      if((-10 < celVal && celVal <= 0) || 14 < fahrVal && fahrVal <= 32) {
        $('body').css('background', getCyan()); 
      }

      if((0 < celVal && celVal <= 10) || 32 < fahrVal && fahrVal <= 50) {
        $('body').css('background', getGreen());
        turnBlack();
      }

      if((10 < celVal && celVal <= 20) || 50 < fahrVal && fahrVal <= 68) {
        $('body').css('background', getYellow());
        turnBlack();
      }

      if((20 < celVal && celVal <= 30) || 68 < fahrVal && fahrVal <= 86) {
        $('body').css('background', getOrange());
        turnWhite();
      }

      if((30 < celVal && celVal <= 40) || 86 < fahrVal && fahrVal <= 104) {
        $('body').css('background', getRed());
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
        turnBlack();
      }
    });
  }
});
