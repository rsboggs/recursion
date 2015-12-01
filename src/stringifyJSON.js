// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (obj === null) {
    return 'null';
  } else if (obj === undefined || obj.constructor === Function) {
    return undefined;
  } else if (obj.constructor === Number || obj.constructor === Boolean) {
    return obj.toString();
  } else if (obj.constructor === String) {
    return '\"' + obj + '\"';
  } else if (obj.constructor === Array) {
    return '[' + obj.map(function(i) {
      return stringifyJSON(i);
    }).join(',') + ']';
  } else if (obj.constructor === Object) {
    var stringified = [];
    for (var item in obj) {
      if (stringifyJSON(item) !== undefined
        && stringifyJSON(obj[item]) !== undefined) {
        stringified.push(stringifyJSON(item) + ':' + stringifyJSON(obj[item]));
      }
    }
    return '{' + stringified.join(',') + '}';
  }
};
