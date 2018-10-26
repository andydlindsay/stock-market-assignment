var maxProfit = function(list) {
  var maximum = 0;
  for (var i = 0; i < list.length; i++) {
    for (var j = i + 1; j < list.length; j++) {
      if (list[j] - list[i] > maximum) {
        maximum = list[j] - list[i];
      }
    }
  }

  return maximum > 0 ? maximum : -1;
};

module.exports = maxProfit;
