$(document).ready(function ()
	{

    $( "#win" ).hide();
    $( "#lose" ).hide();

		var board = new Board();
		board.RenderInitialBoard();
		var timer = new Timer();
		$(document).on('click', '#new-game', board.NewGameClick);
		$(document).on('click', '.cell', function(e) {
      board.CellClick(this);
      });

    $("#new-game").click(function(e) {
      timer.startTimer();
    });

    $(document).keypress(function(e) {
      if (e.which == 13) {
        timer.endTimer();
      }
     });
	});
