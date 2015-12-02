// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var matches = [];

  var matchClass = function(element) {
    if (element.nodeType === 1) {
      for (var i = 0; i < element.classList.length; i++) {
        if (element.classList[i] === className) {
          matches.push(element);
        }
        // Call function for any children of element
        if (element.hasChildNodes()) {
          var children = element.childNodes;
          for (var j = 0; j < children.length; j++) {
            matchClass(children[j]);
          }
        }
      }
    }
  };

  matchClass(document.body);
  return matches;
};
