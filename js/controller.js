$(document).ready(function () 
	{
		var board = new Board();
		board.RenderInitialBoard();
		$("#new-game").click(board.NewGame);
		$(".cell").click(board.CellClick);
	});