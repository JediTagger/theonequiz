var FruitMaker = (function(){
  privateArray = ["apples", "bananas", "cherries", "huckleberries"];
  return {
    getFruits: function(){
      return privateArray;
    },
    addFruit: function(newFruit){
      privateArray.push(newFruit);
    }
  };
})();