function randomVal(min, max) {
  return Math.floor(Math.random() * (max - min) + 1) + min;
}

// red
function getRandomColor() {
  for (var i = 0; i < 5; i++) {
    var hsl = 'hsl(' + randomVal(10, 11) + ', ' + randomVal(80, 85) + '%,  ' + randomVal(60, 65) + '%)';
  }
  return hsl;
}

// orange
function getRandomColor() {
  for (var i = 0; i < 5; i++) {
    var hsl = 'hsl(' + randomVal(20, 21) + ', ' + randomVal(80, 85) + '%,  ' + randomVal(60, 65) + '%)';
  }
  return hsl;
}

// yellow
function getRandomColor() {
  for (var i = 0; i < 5; i++) {
    var hsl = 'hsl(' + randomVal(50, 51) + ', ' + randomVal(80, 85) + '%,  ' + randomVal(60, 65) + '%)';
  }
  return hsl;
}

// green
function getRandomColor() {
  for (var i = 0; i < 5; i++) {
    var hsl = 'hsl(' + randomVal(150, 151) + ', ' + randomVal(80, 85) + '%,  ' + randomVal(60, 65) + '%)';
  }
  return hsl;
}

// cyan
function getRandomColor() {
  for (var i = 0; i < 5; i++) {
    var hsl = 'hsl(' + randomVal(190, 191) + ', ' + randomVal(80, 85) + '%,  ' + randomVal(60, 65) + '%)';
  }
  return hsl;
}

// blue
function getRandomColor() {
  for (var i = 0; i < 5; i++) {
    var hsl = 'hsl(' + randomVal(235, 236) + ', ' + randomVal(80, 85) + '%,  ' + randomVal(60, 65) + '%)';
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

