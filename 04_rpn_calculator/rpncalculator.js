var Calculator = function() {
  var arr = [];
  var total = 0;
  this.value = function () {
    return total;
  }
  this.push = function (num) {
    arr.push(num);
  }
  this.plus = function () {
    if (arr.length <= 0) {
      throw new Error("calculator is empty");
    };
    total = arr[arr.length-2] + arr[arr.length-1];
    arr.pop();
    arr.pop();
    arr.push(total);
    return total;
  }
  this.minus = function () {
    if (arr.length <= 0) {
      throw new Error("calculator is empty");
    };
    total = arr[arr.length-2] - arr[arr.length-1];
    arr.pop();
    arr.pop();
    arr.push(total);
    return total;
  }
  this.divide = function () {
    if (arr.length <= 0) {
      throw new Error("calculator is empty");
    };
    total = arr[arr.length-2] / arr[arr.length-1];
    arr.pop();
    arr.pop();
    arr.push(total);
    return total;
  }
  this.times = function () {
    if (arr.length <= 0) {
      throw new Error("calculator is empty");
    };
    total = arr[arr.length-2] * arr[arr.length-1];
    arr.pop();
    arr.pop();
    arr.push(total);
    return total;
  }

};
