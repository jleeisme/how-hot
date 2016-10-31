// allows for randomizing in the colour functions
// obvs there's more straight forward ways of getting a singular colour, but I initially thought of having a lot of variations.
function randomVal(min, max) {
  return Math.floor(Math.random() * (max - min) + 1) + min;
}

// red 359, 100, 65...
function getRed() {
  for (var i = 0; i < 5; i++) {
    var hsl = 'hsl(' + randomVal(359, 359) + ', ' + randomVal(100, 100) + '%,  ' + randomVal(65, 65) + '%)';
  }
  return hsl;
}

// orange 27, 97, 61
function getOrange() {
  for (var i = 0; i < 5; i++) {
    var hsl = 'hsl(' + randomVal(27, 27) + ', ' + randomVal(97, 97) + '%,  ' + randomVal(61, 61) + '%)';
  }
  return hsl;
}

// yellow 50, 94, 58
function getYellow() {
  for (var i = 0; i < 5; i++) {
    var hsl = 'hsl(' + randomVal(50, 50) + ', ' + randomVal(94, 94) + '%,  ' + randomVal(58, 58) + '%)';
  }
  return hsl;
}

// green 93, 55, 64
function getGreen() {
  for (var i = 0; i < 5; i++) {
    var hsl = 'hsl(' + randomVal(93, 93) + ', ' + randomVal(55, 55) + '%,  ' + randomVal(64, 64) + '%)';
  }
  return hsl;
}

// cyan 185, 61, 64
function getCyan() {
  for (var i = 0; i < 5; i++) {
    var hsl = 'hsl(' + randomVal(185, 185) + ', ' + randomVal(61, 61) + '%,  ' + randomVal(64, 64) + '%)';
  }
  return hsl;
}

// blue 215, 51, 52
function getBlue() {
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

// white...looks way cooler than just entering #fff
function white() {
  for (var i = 0; i < 5; i++) {
    var hsl = 'hsl(' + randomVal(0, 0) + ', ' + randomVal(0, 0) + '%,  ' + randomVal(100, 100) + '%';
  }
  return hsl;
}