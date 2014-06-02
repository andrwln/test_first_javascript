var translate = function(word) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var arr = word.split(" ");
  var output = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].charAt(0) == "s" && arr[i].charAt(1) == "c" && arr[i].charAt(2) == "h") {
      output.push(arr[i].substring(3) + arr[i].charAt(0) + arr[i].charAt(1) + arr[i].charAt(2) + "ay");
    }
    else if (arr[i].charAt(0) == "q" && arr[i].charAt(1) == "u") {
      output.push(arr[i].substring(2) + arr[i].charAt(0) + arr[i].charAt(1) + "ay");
    }
    else if (vowels.indexOf(arr[i].charAt(0)) == -1 && arr[i].charAt(1) == "q" && arr[i].charAt(2) == "u") {
      output.push(arr[i].substring(3) + arr[i].charAt(0) + arr[i].charAt(1) + arr[i].charAt(2) + "ay");
    }
    else if (vowels.indexOf(arr[i].charAt(0)) != -1) {
      output.push(arr[i] + "ay");
    }
    else if (vowels.indexOf(arr[i].charAt(0)) == -1 && vowels.indexOf(arr[i].charAt(1)) == -1 && vowels.indexOf(word.charAt(2)) == -1) {
      output.push(arr[i].substring(3) + arr[i].charAt(0) + arr[i].charAt(1) + arr[i].charAt(2) + "ay");
    }
    else if (vowels.indexOf(arr[i].charAt(0)) == -1 && vowels.indexOf(arr[i].charAt(1)) == -1) {
      output.push(arr[i].substring(2) + arr[i].charAt(0) + arr[i].charAt(1) + "ay");
    }
    else if (vowels.indexOf(arr[i].charAt(0)) == -1 && vowels.indexOf(arr[i].charAt(1)) != -1) {
      output.push(arr[i].substring(1) + arr[i].charAt(0) + "ay");
    }

  }
  return output.join(" ");
};
