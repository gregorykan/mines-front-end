$(document).ready(function () 
	{
		var board = new Board();
		board.RenderInitialBoard();
		$("#new-game").click(board.NewGameClick);
		$(".cell").click(board.CellClick);
	});