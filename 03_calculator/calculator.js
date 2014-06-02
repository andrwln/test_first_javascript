var Calculator = function () {
  this.value = function () {
    return 0;
  }
  this.add = function (num) {
    var val = this.value();
    this.value = function() {
      return val + num;
    }
  }
  this.subtract = function(num) {
    var val = this.value();
    this.value = function() {
      return val - num;
    }
  }
};
