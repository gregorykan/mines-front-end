$(document).ready(function () 
	{
		var board = new Board();
		board.Render();

		$("#new-game").click(function (e) 
		{
			e.preventDefault();
			console.log("button clicked");
			$.ajax(
				{
					url: "",
					method: "",
					dataType: "",
				}).done(function(data)
				{

				});
		})
	});