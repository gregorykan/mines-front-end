function Timer ()
{
  this.startTime;
}

Timer.prototype.startTimer = function() {
  // function updateTime() {
  //   var timeElapsed = Date.now() - this.startTime; // calculate current time elapsed
  //   console.log(timeElapsed);
  // }
  console.log('Start Timer')
  this.startTime = Date.now();
    console.log(this.startTime)
    var that = this;
  var interval = setInterval(function() {
    var timeElapsed = Math.floor((Date.now() - that.startTime) / 1000);
    $('#timer').text(timeElapsed);
  },500);
}

Timer.prototype.endTimer = function() {
  console.log('End Timer')
}

Timer.prototype.updateTime = function() {

  var timeElapsed = Date.now() - this.startTime; // calculate current time elapsed
  console.log(timeElapsed);
}
