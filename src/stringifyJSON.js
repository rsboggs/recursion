// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (obj === null) {
    return 'null';
  } else if (obj.constructor === Number || obj.constructor === Boolean) {
    return obj.toString();
  } else if (obj.constructor === String) {
    return '\"' + obj + '\"';
  }
};
