var Planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

document.getElementById('vanilla_output').innerHTML = "This content generated with vanilla JavaScript";

$('#jquery_output').html("This content generated with jQuery");

var modulus = function(num1, num2) {
  return num1 % num2;
};

console.log("modulus function result: ", modulus(10, 3));

var doMath = function(num1, num2, func) {
  return func(num1, num2);
};

var add = function(num1, num2) {
  return num1 + num2;
};

var subtract = function(num1, num2) {
  return num1 - num2;
};

console.log("doMath add result: ", doMath(2, 2, add));
console.log("doMath subtract result: ", doMath(2, 2, subtract));

var sortedPlanets = function(array) {
  return array.sort();
};

console.log("sortedPlanets result: ", sortedPlanets(Planets));

var reversedPlanets = function(array) {
  var reversedArray = [];
  for (var i = 0; i < array.length; i++) {
    reversedArray.push(array[i].split("").reverse().join(""));
  };
  return reversedArray;
};

console.log("reversedPlanets result: ", reversedPlanets(Planets));

var longPlanets = function(array) {
  var longArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i].length > 6) {
      longArray.push(array[i]);
    };
  };
  return longArray;
};

console.log("longPlanets result: ", longPlanets(Planets));

var getAnimals = function () {
  $.ajax({
    url: "data/animals.json"
  }).done(function(data) {
    console.log("animals", data.animals);
  });
};

getAnimals();














