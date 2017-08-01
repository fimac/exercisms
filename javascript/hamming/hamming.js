var Hamming = function(inputOne, inputTwo) {
  this.strandOne = inputOne;
  this.strandTwo = inputTwo;
};

Hamming.prototype.compute = function() {
  if (this.strandOne === this.strandTwo) {
    return 0;
  } else {
    return 1;
  }
};

module.exports = Hamming;
