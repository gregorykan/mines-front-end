$(document).ready(function () 
	{
		var board = new Board();
		board.Render();

		$("#new-game").click(function (e) 
		{
			e.preventDefault();
			console.log("button clicked");
			// ajax request not yet filled in, need URI from board server
			$.ajax(
				{
					url: "",
					method: "",
					dataType: "",
				}).done(function(data)
				{

				});
		});

		$(".cell").click(function (e)
		{
			e.preventDefault();
			var $id = $(e.target).attr("id");
			console.log($id);
		});
	});