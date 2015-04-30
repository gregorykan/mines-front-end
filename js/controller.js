$(document).ready(function () 
	{
		var board = new Board();
		board.Render();
		$("#new-game").click(board.NewGame);
		$(".cell").click(board.CellClick);
	});