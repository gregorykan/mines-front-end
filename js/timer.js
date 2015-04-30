function Timer () 
{

}

Timer.prototype.updateTimer = function() 
{
	console.log('yes');
	var $timer = $('#timer');
	for(var i = 0; i <= 999; i ++) {
		$timer.text(i);
	}
		setInterval(this.updateTimer, 1000);
}