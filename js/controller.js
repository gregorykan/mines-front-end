$(document).ready(function ()
	{

    $( "#win" ).hide();
    $( "#lose" ).hide();

		var board = new Board();
		board.RenderInitialBoard();
		var timer = new Timer();
		$("#new-game").on('click', board.NewGameClick);
		$(".cell").click(function(e) {
      board.CellClick(this);
      });

    $("#timer").click(function(e) {
      timer.startTimer();
    });

    $(document).keypress(function(e) {
      if (e.which == 13) {
        timer.endTimer();
      }
     });
	});
