function Timer ()
{
  this.startTime;
  this.endTime;
  this.updateTimer;
}

Timer.prototype.startTimer = function() {
  this.startTime = Date.now();
  var that = this;
  var updateTimer = setInterval(function() {
    if (typeof that.endTime === 'undefined') {
        var timeElapsed = Math.floor((Date.now() - that.startTime) / 1000);
        $('#timer').text(timeElapsed);
    } else {
      clearInterval(updateTimer);
    }
  },500);
}


Timer.prototype.endTimer = function() {
  this.endTime = $('#timer').text();
  console.log(this);
  $('#timer').text(this.endTime);
}

