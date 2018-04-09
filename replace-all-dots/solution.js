var replaceDots = function(str) {
  var newString = [];
  var stringSplit = str.split('');
  for (var i = 0; i < stringSplit.length; i++){
    newString.push(stringSplit[i].replace('.', '-'));
  }
  reJoined = newString.join("")
  return reJoined;
};