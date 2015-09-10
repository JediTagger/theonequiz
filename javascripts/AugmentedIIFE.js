var FruitMaker = (function (aug) {
  var sliceArray = [];

  aug.slices = function(name, num) {
    for (var i = 0; i < num; i++) {
      sliceArray.push(name);
    };
    return sliceArray;
  };

  return FruitMaker;

})(FruitMaker);