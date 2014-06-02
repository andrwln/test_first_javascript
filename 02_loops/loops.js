var repeat = function(string, num) {
  var result = "";
  for(var i = 0; i < num; i++) {
    result += string;
  }
  return result;
};

var join = function(array, sep) {
  if (sep == '/') {
    delim = sep;
  }
  else {
    delim = "";
  }
  return array.join(delim);
};

var sum = function(array) {
  var total = 0;
  for(var i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total
}

var paramify = function (param) {
  var output = [];
  for (var p in param) {
    if (param.hasOwnProperty(p)) {
      output.push(p)
    }
  }
  output = output.sort();
  for(var i = 0; i < output.length; i++) {
    output[i] = output[i] + "=" + param[output[i]];
  }
  return output.join('&');
};

var factorial = function (num) {
  var fact = 1;
  if (num > 0) {
    for (i = 1; i<=num; i++) {
      fact *= i;
    }
    return fact;
  }
  else {
    return 1;
  }
};

var concat_string = function() {
  var arr = [];
  for (var i = 0; i < arguments.length; i++) {
    arr.push(arguments[i]);
  }
  return arr.join('');
}

