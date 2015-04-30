function Board () 
{
	this.sideLength = 10;
}

Board.prototype.Render = function () 
{
	for (var r = 0; r < this.sideLength; r++)
	{
		for (var c = 0; c < this.sideLength; c++)
		{
			$('.board').append('<div class="cell" id="r_' + r + '-c_' + c +'"></div>');
		}
	}

}

Board.prototype.NewGame = function ()
{
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
}

Board.prototype.CellClick = function ()
{
	var $id = $(this).attr("id");
	console.log($id);
}